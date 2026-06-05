from flask import Flask,  jsonify, request
from flask_cors import CORS
import psycopg



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
        
app = Flask(__name__)
CORS(app)

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

    if not data or 'message' not in data:
        return jsonify({
            "status": "You left me hanging bro with no message :("
        })

    user_message = data['message']
    cur.execute(
        "INSERT INTO task (task_name) VALUES (%s)",
        (user_message))
    return jsonify({
        "status": "sucsess",
        "reply": f"Flask recieved your message dude: {user_message}"

    })

@app.route('/deletetask', methods=['POST'])

def delete_element():
    data = request.get_json()

    if not data or 'message' not in data:
        return jsonify({
            "status": "You left me hanging bro with no message :("
        })
    try:

        user_message = data['message']
        cur.execute("""
                    DELETE FROM task WHERE task_name = %s;
                    """
                    [(user_message)]
                    )
    except:      
        return jsonify({"error": "Task that was sent does not exist"})

    return jsonify({
        "status": "sucsess",
        "reply": f"Flask recieved your message dude: {user_message}"

    })


if __name__ == "__main__":
    app.run(debug=True)
