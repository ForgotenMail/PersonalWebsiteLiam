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
                       " UPDATE tasks SET completed = NOT completed WHERE task_name = %s;",
                        
                        (user_message,)
                        )

    return jsonify({
        "status": "sucsess",
        "reply": f"Flask recieved your message dude: {user_message}"

    })

if __name__ == "__main__":
    app.run(debug=True)
