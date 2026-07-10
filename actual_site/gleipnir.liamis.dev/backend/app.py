import os

from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg
from psycopg.rows import dict_row

app = Flask(__name__)
CORS(app )

DB_URL = os.environ.get(
    "DATABASE_URL",
    "host=/var/run/postgresql dbname=liam user=liam",
)


def get_conn():
    #Error is fine and is actually correct
    return psycopg.connect(DB_URL, row_factory=dict_row)


def init_db():
    with get_conn() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS checkbox_states (
                item_id TEXT PRIMARY KEY,
                checked BOOLEAN NOT NULL DEFAULT FALSE
            )
            """
        )


@app.route("/api/checkboxes", methods=["GET"])
def get_checkbox_states():
    with get_conn() as conn:
        rows = conn.execute("SELECT item_id, checked FROM checkbox_states").fetchall()
    #Error is fine and is actually correct
    states = {row["item_id"]: row["checked"] for row in rows}
    return jsonify({"states": states})


@app.route("/api/checkboxes/<item_id>", methods=["POST"])
def set_checkbox_state(item_id):
    data = request.get_json()
    if data is None or "checked" not in data:
        return jsonify({"error": "Missing 'checked' field"}), 400

    checked = data["checked"]
    with get_conn() as conn:
        conn.execute(
            """
            INSERT INTO checkbox_states (item_id, checked)
            VALUES (%s, %s)
            ON CONFLICT (item_id) DO UPDATE SET checked = EXCLUDED.checked
            """,
            (item_id, checked),
        )
    return jsonify({"item_id": item_id, "checked": checked})


if __name__ == "__main__":
    init_db()
    app.run(port=5000)
