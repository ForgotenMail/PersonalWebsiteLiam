const { Pool } = require('pg');

// Use DATABASE_URL in production when it is available. Otherwise connect to the
// local PostgreSQL server over its Unix socket and use the existing `liam`
// database. Rows are stored in PostgreSQL, so they persist across Node restarts.
const pool = new Pool(
    process.env.DATABASE_URL
        ? {
              connectionString: process.env.DATABASE_URL,
              ssl: process.env.PGSSLMODE === 'require' ? { rejectUnauthorized: false } : false,
          }
        : {
              host: process.env.PGHOST || '/var/run/postgresql',
              database: process.env.PGDATABASE || 'liam',
              user: process.env.PGUSER,
              password: process.env.PGPASSWORD,
              port: process.env.PGPORT ? Number(process.env.PGPORT) : 5432,
          }
);

let setupPromise;

// ============================================================
// Sets up the table when the server first starts
// ============================================================
async function setupDatabase() {
    if (!setupPromise) {
        setupPromise = pool.query(`
            CREATE TABLE IF NOT EXISTS task (
                task_name   TEXT PRIMARY KEY,
                completed   BOOLEAN NOT NULL DEFAULT false
            );
        `);
    }

    await setupPromise;
    console.log('Database table ready!');
}

// ============================================================
// Gets all tasks from the database
// ============================================================
async function getAllTasks() {
    await setupDatabase();

    const result = await pool.query(`
        SELECT task_name, completed
        FROM task
        ORDER BY task_name ASC;
    `);

    return result.rows;
}

// ============================================================
// Adds a new task to the database
// ============================================================
async function addTaskToDatabase(taskName) {
    await setupDatabase();

    const cleanTaskName = taskName.trim();
    if (!cleanTaskName) {
        throw new Error('Task name cannot be empty.');
    }

    const result = await pool.query(
        `
            INSERT INTO task (task_name, completed)
            VALUES ($1, false)
            ON CONFLICT (task_name) DO UPDATE
                SET task_name = EXCLUDED.task_name
            RETURNING task_name, completed;
        `,
        [cleanTaskName]
    );

    console.log(`Added task: ${cleanTaskName}`);
    return result.rows[0];
}

// ============================================================
// Flips the completed state and returns the updated task
// ============================================================
async function toggleTask(taskName) {
    await setupDatabase();

    const result = await pool.query(
        `
            UPDATE task
            SET completed = NOT completed
            WHERE task_name = $1
            RETURNING task_name, completed;
        `,
        [taskName]
    );

    if (result.rowCount === 0) {
        return null;
    }

    const task = result.rows[0];
    console.log(`Task "${task.task_name}" is now ${task.completed ? 'completed' : 'not completed'}`);
    return task;
}

// ============================================================
// Deletes a task from the database by task_name
// ============================================================
async function deleteTask(taskName) {
    await setupDatabase();

    const result = await pool.query(
        `
            DELETE FROM task
            WHERE task_name = $1
            RETURNING task_name, completed;
        `,
        [taskName]
    );

    if (result.rowCount === 0) {
        return null;
    }

    console.log(`Deleted task: ${taskName}`);
    return result.rows[0];
}

// Kept for compatibility with existing code that imports setUp().
async function setUp() {
    return getAllTasks();
}

async function closeDatabase() {
    await pool.end();
}

module.exports = {
    setupDatabase,
    getAllTasks,
    addTaskToDatabase,
    toggleTask,
    deleteTask,
    setUp,
    closeDatabase,
};
