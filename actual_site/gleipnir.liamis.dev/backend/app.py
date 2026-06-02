from flask import Flask, render_template, jsonify
from flask_cors import CORS



app = Flask(__name__)
CORS(app)

@app.route('/message', methods=['POST'])

def recieve_message():
    data = request.get_json()

    if not data or 'message' not in data:
            return jsonify("status": "You  left me hanging bro with no message :(")

    user_message = data['message']
    print(f"Message from frontend: {user_message}"")

    return jsonify({
        "status": "sucsess",
        "reply": f"Flask recieved your message dude: {user_message}"

    })


if __name__ == "__main__":
    app.run(debug=True)
