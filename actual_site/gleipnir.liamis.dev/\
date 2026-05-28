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
    // If you want the task_name to be the main identifier just use TEXT PRIMARY KEY
    // completed is a BOOLEAN (true/false) not an INT:
    await client.query(`
        CREATE TABLE IF NOT EXISTS task (
            task_name      TEXT PRIMARY KEY,
            completed BOOLEAN DEFAULT false
        );
    `);
    console.log("Table ready!\n");
}

// ============================================================
// Gets all tasks from the database
// ============================================================
async function getAllTasks() {
    const result = await client.query('SELECT * FROM task;');
    return result.rows; // Returns an array of tasks like:
                        // [{task_name: "Do Homework", completed: false}, ...]
}

// ============================================================
// Adds a new task to the database
// ============================================================
async function addTaskToDatabase(tasktask_name) {
    // FIXED: You had "clinet" (typo) and "comppeted" (typo)
    // FIXED: You were putting taskText directly in the string (dangerous!)
    //        Always use $1, $2 placeholders!
    await client.query(
        'INSERT INTO task (task_name, completed) VALUES ($1, $2);',
        [tasktask_name, false]
    );
    console.log(`Added task: ${tasktask_name}`);
}

// ============================================================
// THIS IS THE TOGGLE YOU ASKED FOR
// Flips the completed state and returns the task task_name + new state
// ============================================================
async function toggleTask(tasktask_name) {
    // NOT completed flips true --> false and false --> true
    await client.query(
        'UPDATE task SET completed = NOT completed WHERE task_name = $1;',
        [tasktask_name]
    );

    // Read the updated task so we can see what it changed to
    const result = await client.query(
        'SELECT * FROM task WHERE task_name = $1;',
        [tasktask_name]
    );

    const task = result.rows[0];
    console.log(`Task "${task.task_name}" is now ${task.completed ? "completed" : "not completed"}`);
    return task; // Returns the full task object so the browser can update the page
}

// ============================================================
// Deletes a task from the database by task_name
// ============================================================
async function deleteTask(tasktask_name) {
    await client.query(
        'DELETE FROM task WHERE task_name = $1;',
        [tasktask_name]
    );
    console.log(`Deleted task: ${tasktask_name}`);
}


async function setUp() {
    const allTasks = await getAllTasks();  // FIXED: needs () to call it, and await since its async
    for (let task of allTasks) {          // FIXED: "let" should be "for...of"
        addTask(task.task_name, task.completed); // FIXED: pass in the name and completed state
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
