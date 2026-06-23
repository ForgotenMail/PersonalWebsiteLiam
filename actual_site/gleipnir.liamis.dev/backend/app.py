"""
Gleipnir To-Do List — Flask REST API Backend

Provides a JSON API for the Gleipnir frontend. Stores tasks, presets,
and test plans in a PostgreSQL database (database name: liam, user: liam).

Run with:  python app.py
Serves on: http://127.0.0.1:5000
"""

from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg
from psycopg import errors

# =============================================================================
#  App setup
# =============================================================================
app = Flask(__name__)
CORS(app)  # Enable cross-origin requests from the Vite dev server


# =============================================================================
#  Database schema initialization
#  Tables are created IF NOT EXISTS, so this is safe to run every startup.
# =============================================================================
with psycopg.connect("dbname=liam user=liam") as conn:
    with conn.cursor() as cur:

        # ----- Main task table -----
        cur.execute("""
            CREATE TABLE IF NOT EXISTS task (
                task_name   TEXT PRIMARY KEY,
                completed   BOOLEAN DEFAULT FALSE,
                assigned_to TEXT    DEFAULT 'No one'
            )
        """)

        # Retroactively add the assigned_to column for older databases
        cur.execute("""
            ALTER TABLE task
            ADD COLUMN IF NOT EXISTS assigned_to TEXT DEFAULT 'No one'
        """)

        # ----- Preset definitions -----
        cur.execute("""
            CREATE TABLE IF NOT EXISTS presets (
                id            SERIAL PRIMARY KEY,
                preset_name   TEXT,
                preset_desc   TEXT,
                preset_author TEXT DEFAULT 'liam the biam'
            )
        """)

        # ----- Individual tasks belonging to a preset -----
        cur.execute("""
            CREATE TABLE IF NOT EXISTS preset_tasks (
                id          SERIAL PRIMARY KEY,
                task_name   TEXT,
                preset_name TEXT
            )
        """)

        # ----- User-created test plans (markdown documents) -----
        cur.execute("""
            CREATE TABLE IF NOT EXISTS test_plans (
                id          SERIAL PRIMARY KEY,
                key         TEXT UNIQUE NOT NULL,
                title       TEXT NOT NULL,
                description TEXT,
                markdown    TEXT
            )
        """)


# =============================================================================
#  Task CRUD endpoints
# =============================================================================

@app.route('/gettasks', methods=['GET'])
def get_tasks():
    """Return all tasks with completion status and assigned person."""
    with psycopg.connect("dbname=liam user=liam") as conn:
        with conn.cursor() as cur:
            cur.execute(
                "SELECT task_name, completed, COALESCE(assigned_to, 'No one') FROM task;"
            )
            rows = cur.fetchall()

    tasks = [
        {"task_name": row[0], "completed": row[1], "assigned_to": row[2]}
        for row in rows
    ]

    return jsonify({"status": "success", "tasks": tasks})


@app.route('/addelement', methods=['POST'])
def add_element():
    """Create a new task. Rejects duplicates (task_name is the primary key)."""
    data = request.get_json()

    if not data or 'task_name' not in data:
        return jsonify({"status": "error", "message": "Missing task_name field"})

    task_name = data['task_name']

    try:
        with psycopg.connect("dbname=liam user=liam") as conn:
            with conn.cursor() as cur:
                cur.execute(
                    "INSERT INTO task (task_name) VALUES (%s)",
                    (task_name,)
                )
    except errors.UniqueViolation:
        return jsonify({
            "status": "error",
            "message": "Task already exists, boomer"
        })
    except psycopg.Error as e:
        return jsonify({"status": "error", "message": str(e)}), 500

    return jsonify({"status": "success", "task_name": task_name})


@app.route('/deletetask', methods=['POST'])
def delete_element():
    """Delete a task by name."""
    data = request.get_json()

    if not data or 'task_name' not in data:
        return jsonify({"status": "error", "message": "Missing task_name field"})

    task_name = data['task_name']

    with psycopg.connect("dbname=liam user=liam") as conn:
        with conn.cursor() as cur:
            cur.execute(
                "DELETE FROM task WHERE task_name = %s;",
                (task_name,)
            )

    return jsonify({"status": "success", "task_name": task_name})


@app.route('/checkoff', methods=['POST'])
def checkedOff():
    """Toggle a task's completed status."""
    data = request.get_json()

    if not data or 'task_name' not in data:
        return jsonify({"status": "error", "message": "Missing task_name field"})

    task_name = data['task_name']

    with psycopg.connect("dbname=liam user=liam") as conn:
        with conn.cursor() as cur:
            cur.execute(
                "UPDATE task SET completed = NOT completed WHERE task_name = %s;",
                (task_name,)
            )

    return jsonify({"status": "success", "task_name": task_name})


@app.route('/assigntask', methods=['POST'])
def assign_task():
    """Update the person assigned to a task."""
    data = request.get_json()

    if not data or 'task_name' not in data or 'assigned_to' not in data:
        return jsonify({"status": "error", "message": "Missing task_name or assigned_to"})

    task_name = data['task_name']
    assigned_to = data['assigned_to'] or 'No one'

    with psycopg.connect("dbname=liam user=liam") as conn:
        with conn.cursor() as cur:
            cur.execute(
                "UPDATE task SET assigned_to = %s WHERE task_name = %s;",
                (assigned_to, task_name)
            )

    return jsonify({
        "status": "success",
        "message": f"Assigned {task_name} to {assigned_to}"
    })


# =============================================================================
#  Preset CRUD endpoints
# =============================================================================

@app.route('/create_preset', methods=['POST'])
def create_preset():
    """
    Create a named preset containing a list of task names.
    POST body: { preset_name, preset_desc, preset_author?, task_list: [...] }
    """
    data = request.get_json()

    if not data or 'task_list' not in data or 'preset_name' not in data:
        return jsonify({"status": "error", "message": "Missing required fields"})

    tasks = data['task_list']
    preset_name = data['preset_name']
    preset_desc = data.get('preset_desc', '')
    preset_author = data.get('preset_author', 'liam the biam')

    with psycopg.connect("dbname=liam user=liam") as conn:
        with conn.cursor() as cur:
            cur.execute(
                "INSERT INTO presets (preset_name, preset_desc, preset_author) VALUES (%s, %s, %s)",
                (preset_name, preset_desc, preset_author)
            )

            for task in tasks:
                cur.execute(
                    "INSERT INTO preset_tasks (task_name, preset_name) VALUES (%s, %s)",
                    (task, preset_name)
                )

    return jsonify({"status": "success", "preset_name": preset_name})


@app.route('/allpresets', methods=['GET'])
def return_all_presets():
    """Return every preset (name, description, author)."""
    with psycopg.connect("dbname=liam user=liam") as conn:
        with conn.cursor() as cur:
            cur.execute(
                "SELECT preset_name, preset_desc, preset_author FROM presets;"
            )
            presets = [
                {"name": row[0], "desc": row[1], "author": row[2]}
                for row in cur.fetchall()
            ]

    return jsonify({"presets": presets})


@app.route('/presets', methods=['POST'])
def get_all_tasks_from_preset():
    """
    Return all task names belonging to a given preset.
    POST body: { preset_name }
    """
    data = request.get_json()

    if not data or 'preset_name' not in data:
        return jsonify({"status": "error", "message": "Missing preset_name"})

    preset_name = data["preset_name"]

    with psycopg.connect("dbname=liam user=liam") as conn:
        with conn.cursor() as cur:
            cur.execute(
                "SELECT task_name FROM preset_tasks WHERE preset_name = %s;",
                (preset_name,)
            )
            tasks = [row[0] for row in cur.fetchall()]

    return jsonify({"status": "success", "tasks": tasks})


@app.route('/delete_preset', methods=['POST'])
def delete_presets():
    """
    Delete a preset and all of its associated task rows.
    POST body: { preset_name }
    """
    data = request.get_json()

    if not data or 'preset_name' not in data:
        return jsonify({"status": "error", "message": "Missing preset_name"})

    preset_name = data["preset_name"]

    with psycopg.connect("dbname=liam user=liam") as conn:
        with conn.cursor() as cur:
            # Delete child rows first (foreign key style, even though no FK constraint)
            cur.execute(
                "DELETE FROM preset_tasks WHERE preset_name = %s;",
                (preset_name,)
            )
            cur.execute(
                "DELETE FROM presets WHERE preset_name = %s;",
                (preset_name,)
            )

    return jsonify({"status": "success", "preset_name": preset_name})


# =============================================================================
#  Test Plan CRUD endpoints
#  Test plans are user-authored markdown checklists rendered by the frontend.
# =============================================================================

@app.route('/test_plans', methods=['GET'])
def get_test_plans():
    """Return all test plans ordered by creation time."""
    with psycopg.connect("dbname=liam user=liam") as conn:
        with conn.cursor() as cur:
            cur.execute(
                "SELECT key, title, description, markdown FROM test_plans ORDER BY id;"
            )
            test_plans = [
                {
                    "key": row[0],
                    "name": row[1],
                    "description": row[2],
                    "markdown": row[3]
                }
                for row in cur.fetchall()
            ]

    return jsonify({"status": "success", "test_plans": test_plans})


@app.route('/create_test_plan', methods=['POST'])
def create_test_plan():
    """
    Create a new test plan from user-supplied markdown.
    POST body: { title, description?, markdown }
    The 'key' is auto-generated from the title (lowercase, underscores).
    """
    data = request.get_json()

    if not data or 'title' not in data or 'markdown' not in data:
        return jsonify({
            "status": "error",
            "message": "Missing required fields: title, markdown"
        })

    title = data['title']
    description = data.get('description', '')
    markdown = data['markdown']
    key = title.lower().replace(' ', '_').replace('-', '_')

    try:
        with psycopg.connect("dbname=liam user=liam") as conn:
            with conn.cursor() as cur:
                cur.execute(
                    "INSERT INTO test_plans (key, title, description, markdown) "
                    "VALUES (%s, %s, %s, %s)",
                    (key, title, description, markdown)
                )

        return jsonify({
            "status": "success",
            "test_plan": {
                "key": key,
                "name": title,
                "description": description,
                "markdown": markdown
            }
        })
    except errors.UniqueViolation:
        return jsonify({
            "status": "error",
            "message": "A test plan with this title already exists"
        })
    except psycopg.Error as e:
        return jsonify({"status": "error", "message": str(e)}), 500


@app.route('/delete_test_plan', methods=['POST'])
def delete_test_plan():
    """
    Delete a test plan by its unique key.
    POST body: { key }
    """
    data = request.get_json()

    if not data or 'key' not in data:
        return jsonify({
            "status": "error",
            "message": "Missing required field: key"
        })

    key = data['key']

    with psycopg.connect("dbname=liam user=liam") as conn:
        with conn.cursor() as cur:
            cur.execute(
                "DELETE FROM test_plans WHERE key = %s;",
                (key,)
            )

    return jsonify({
        "status": "success",
        "message": f"Test plan '{key}' deleted"
    })


# =============================================================================
#  Entrypoint
# =============================================================================
if __name__ == "__main__":
    app.run(debug=True)
