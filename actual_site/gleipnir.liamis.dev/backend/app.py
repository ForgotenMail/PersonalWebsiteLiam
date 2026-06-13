from flask import Flask,  jsonify, request
from flask_cors import CORS
import psycopg
from psycopg import errors


app = Flask(__name__)
CORS(app)

with psycopg.connect("dbname=liam user=liam") as conn:

    # Open a cursor to perform database operations
    with conn.cursor() as cur:

        # Execute a command: this creates a new table
        cur.execute("""
            CREATE TABLE IF NOT EXISTS task (
                task_name text PRIMARY KEY,
                completed BOOLEAN DEFAULT FALSE
                )
            """)
        cur.execute("""
            CREATE TABLE IF NOT EXISTS preset_tasks (
            id SERIAL PRIMARY  KEY,
            task_name TEXT,
            preset_name TEXT)
            """)
        cur.execute("""
            CREATE TABLE IF NOT EXISTS presets (
            id SERIAL PRIMARY KEY,
            preset_name TEXT,
            preset_desc TEXT,
            preset_author TEXT DEFAULT 'liam the biam'
            )
            """)
            
            
        
@app.route('/gettasks', methods=['GET'])
def get_tasks():
    with psycopg.connect("dbname=liam user=liam") as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT task_name, completed FROM task;")
            rows = cur.fetchall()

    tasks = [
        {"task_name": row[0], "completed": row[1]}
        for row in rows
    ]

    return jsonify({
        "status": "success",
        "tasks": tasks
    })
@app.route('/message', methods=['POST'])

def receive_message():
    data = request.get_json()

    if not data or 'message' not in data:
        return jsonify({
            "status": "You left me hanging bro with no message :("
        })

    user_message = data['message']
    print(f"Message from frontend: {user_message}")

    return jsonify({
        "status": "sucsess",
        "reply": f"Flask recieved your message dude: {user_message}"

    })


@app.route('/addelement', methods=['POST'])

def add_element():
    data = request.get_json()

    if not data or 'task_name' not in data:
        return jsonify({
            "status": "You left me hanging bro with no message :("
        })

    user_message = data['task_name']
    try:

        with psycopg.connect("dbname=liam user=liam") as conn:

            # Open a cursor to perform database operations
            with conn.cursor() as cur:
                cur.execute(
                    "INSERT INTO task (task_name) VALUES (%s)",
                    (user_message,)
                )
    except errors.UniqueViolation:
        return jsonify({
            "status": "error",
            "message": "Task already exists boomer"
        })
    except psycopg.Error as e:
            return jsonify({ 
            "status": "error",
            "message": str(e)
    }), 500
    return jsonify({
        "status": "sucsess",
        "reply": f"Flask recieved your message dude: {user_message}"

    })

@app.route('/deletetask', methods=['POST'])

def delete_element():
    data = request.get_json()

    if not data or 'task_name' not in data:
        return jsonify({
            "status": "You left me hanging bro with no message :("
        })

    user_message = data['task_name']

    with psycopg.connect("dbname=liam user=liam") as conn:

        # Open a cursor to perform database operations
        with conn.cursor() as cur:
            cur.execute(
                       " DELETE FROM task WHERE task_name = %s;",
                        
                        (user_message,)
                        )

    return jsonify({
        "status": "sucsess",
        "reply": f"Flask recieved your message dude: {user_message}"

    })

@app.route('/checkoff', methods=['POST'])

def checkedOff():
    data = request.get_json()

    if not data or 'task_name' not in data:
        return jsonify({
            "status": "You left me hanging bro with no message :("
        })

    user_message = data['task_name']

    with psycopg.connect("dbname=liam user=liam") as conn:

        # Open a cursor to perform database operations
        with conn.cursor() as cur:
            cur.execute(
                       " UPDATE task SET completed = NOT completed WHERE task_name = %s;",
                        
                        (user_message,)
                        )

    return jsonify({
        "status": "sucsess",
        "reply": f"Flask recieved your message dude: {user_message}"

    })

@app.route('/create_preset', methods=['POST'])

def create_preset():
    data = request.get_json()

    if not data or 'task_list' not in data:
        return jsonify({
            "status": "You left me hanging bro with no message :("
        })

    tasks = data['task_list']
    preset_name = data['preset_name']
    preset_desc = data['preset_desc']

    with psycopg.connect("dbname=liam user=liam") as conn:

        # Open a cursor to perform database operations
        with conn.cursor() as cur:

            cur.execute("""
                INSERT INTO presets (preset_name, preset_desc) VALUES (%s, %s)
            """,
            (preset_name, preset_desc,)
            )

            for task in tasks:
                cur.execute("""
                            INSERT INTO preset_tasks (task_name, preset_name)  VALUES (%s, %s)
                            
                            """,
                            (task, preset_name,)
                            )
    return jsonify({
        "status": "sucsess",
        "reply": f"Flask recieved your message dude: {data}"

    })

@app.route('/allpresets')

def return_all_presets():

    with psycopg.connect("dbname=liam user=liam") as conn:

        # Open a cursor to perform database operations
        with conn.cursor() as cur:
            cur.execute("SELECT preset_name, preset_desc, preset_author FROM presets;")

            presets = [
                {
                    "name": row[0],
                    "desc": row[1],
                    "author": row[2]
                }
                for row in cur.fetchall()
            ]

        return jsonify({
            "presets": presets
        })

@app.route('/presets', methods=['POST'])

def get_all_tasks_from_preset():
    data = request.get_json()

    if not data or 'preset_name' not in data:
        return jsonify({
            "status": "You left me hanging bro with no message :("
        })

    preset_name = data["preset_name"]
    print(f"Message from frontend: {preset_name}")
    
    with psycopg.connect("dbname=liam user=liam") as conn:
        with conn.cursor() as cur:
            cur.execute("""
                        SELECT task_name FROM preset_tasks 
                        WHERE preset_name = %s;
                        """, (preset_name,))
            tasks = [row[0] for row in cur.fetchall()]
    return jsonify({
        "status": "sucsess",
        "tasks": tasks
    })


@app.route('/delete_preset', methods=['POST'])

def delete_presets():
    data = request.get_json()

    if not data or 'preset_name' not in data:
        return jsonify({
            "status": "You left me hanging bro with no message :("
        })

    preset_name = data["preset_name"]
    print(f"Message from frontend: {preset_name}")
    
    with psycopg.connect("dbname=liam user=liam") as conn:
        with conn.cursor() as cur:
            cur.execute("""
                        DELETE FROM preset_tasks 
                        WHERE preset_name = %s;
                        """, (preset_name,))

    with psycopg.connect("dbname=liam user=liam") as conn:
        with conn.cursor() as cur:
            cur.execute("""
                        DELETE FROM presets 
                        WHERE preset_name = %s;
                        """, (preset_name,))
    return jsonify({
        "status": "sucsess",
    })
if __name__ == "__main__":
    app.run(debug=True)
