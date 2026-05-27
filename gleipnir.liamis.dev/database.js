const { Client } = require('pg');

const client = new Client({
    host: '/var/run/postgresql',
    database: 'liam',
});

// ============================================================
// Sets up the table when the program first runs
// ============================================================
async function setupDatabase() {
    await client.connect();
    console.log("Connected to database!\n");

    // FIXED: You had "SERIAL PRIMARY KEY TEXT NOT NULL" which is wrong
    // SERIAL is a number type (auto counting id)
    // If you want the name to be the main identifier just use TEXT PRIMARY KEY
    // completed is a BOOLEAN (true/false) not an INT
    await client.query(`
        CREATE TABLE IF NOT EXISTS task (
            name      TEXT PRIMARY KEY,
            completed BOOLEAN DEFAULT false
        )
    `);
    console.log("Table ready!\n");
}

// ============================================================
// Gets all tasks from the database
// ============================================================
async function getAllTasks() {
    const result = await client.query('SELECT * FROM task');
    return result.rows; // Returns an array of tasks like:
                        // [{name: "Do Homework", completed: false}, ...]
}

// ============================================================
// Adds a new task to the database
// ============================================================
async function addTaskToDatabase(taskName) {
    // FIXED: You had "clinet" (typo) and "comppeted" (typo)
    // FIXED: You were putting taskText directly in the string (dangerous!)
    //        Always use $1, $2 placeholders!
    await client.query(
        'INSERT INTO task (name, completed) VALUES ($1, $2)',
        [taskName, false]
    );
    console.log(`Added task: ${taskName}`);
}

// ============================================================
// THIS IS THE TOGGLE YOU ASKED FOR
// Flips the completed state and returns the task name + new state
// ============================================================
async function toggleTask(taskName) {
    // NOT completed flips true --> false and false --> true
    await client.query(
        'UPDATE task SET completed = NOT completed WHERE name = $1',
        [taskName]
    );

    // Read the updated task so we can see what it changed to
    const result = await client.query(
        'SELECT * FROM task WHERE name = $1',
        [taskName]
    );

    const task = result.rows[0];
    console.log(`Task "${task.name}" is now ${task.completed ? "completed" : "not completed"}`);
    return task; // Returns the full task object so the browser can update the page
}

// ============================================================
// Deletes a task from the database by name
// ============================================================
async function deleteTask(taskName) {
    await client.query(
        'DELETE FROM task WHERE name = $1',
        [taskName]
    );
    console.log(`Deleted task: ${taskName}`);
}


async function setUp() {
    const allTasks = await getAllTasks();  // FIXED: needs () to call it, and await since its async
    for (let task of allTasks) {          // FIXED: "let" should be "for...of"
        addTask(task.name, task.completed); // FIXED: pass in the name and completed state
    }
// Export all functions so other files can use them
module.exports = {
    setupDatabase,
    getAllTasks,
    addTaskToDatabase,
    toggleTask,
    deleteTask,
  setUp
};
}

}
