<<<<<<< HEAD
// This is a basic commnet
//Getting ids for Item
const todo_list = document.getElementById("todo_list");
const todo_input = document.getElementById("todo_input");
// Create the function
function sayHello() {
  const inputValue = todo_input.value;
  if (inputValue == "") {
      alert("Please actually type something bro");
      return;
    }
    const todo_item = document.createElement("li");
    todo_item.classList.add("todo_item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = inputValue;

    const delete_btn = document.createElement("button");
    delete_btn.textContent = "Delete";

    delete_btn.addEventListener("click", () => {
      todo_list.removeChild(todo_item);
    });

    todo_item.appendChild(checkbox);
    todo_item.appendChild(span);
    todo_item.appendChild(delete_btn);
    todo_item.appendChild(todo_item);

    todo_input.value = "";

=======
// ============================================================
// These load preset task lists onto the page
// ============================================================
function loadSchool() {
    addTask("Do Homework");
    addTask("Find A Girlfriend");
    addTask("Talk to Parents about failing english");
>>>>>>> parent of 16f43fb (Basic working site (Has all aspects but presesets and it works!))
}

function loadGroceries() {
    addTask("Go To store");
    addTask("Get Lettuce");
    addTask("Get another girlfriend");
}

function loadWork() {
    addTask("Stop Hitting on Secretary");
    addTask("Stop Hitting on Boss");
    addTask("Start hitting on some coworkers");
    addTask("Find Yet Another Girlfriend");
}

// ============================================================
// Adds a task to the page
// taskText - the name of the task (also used as the ID in the database)
// isCompleted - whether the task starts as completed (default false)
// ============================================================
function addTask(taskText, isCompleted = false) {

    let text;

    // If text passed in directly use that
    if (taskText) {
        text = taskText;
    } else {
        // Otherwise read from input box
        const input = document.getElementById("taskInput");
        text = input.value.trim();
        input.value = "";
    }

    // Stops empty tasks
    if (text === "") return;

    // Creates a new <li> element
    const li = document.createElement("li");

    // Inserts HTML inside the task
    // ADDED: data-task-name stores the name so we can find it later
    li.innerHTML = `
        <div class="task-left">
            <input type="checkbox" ${isCompleted ? "checked" : ""}>
            <span class="${isCompleted ? "completed" : ""}">${text}</span>
        </div>
        <button class="delete-btn">Delete</button>
    `;

    // Finds checkbox inside this specific task
    const checkbox = li.querySelector("input");

    // Finds text span inside this specific task
    const span = li.querySelector("span");

    // ============================================================
    // THIS IS THE TOGGLE YOU ASKED FOR
    // Runs when checkbox is clicked
    // Gets the task name from the span text
    // ============================================================
    checkbox.addEventListener("change", () => {

        // Gets the name of this specific task from the span text
        // This is how we know WHICH task was clicked!
        const taskName = span.textContent;
        console.log(`Toggled task: ${taskName}`);

        // Flips the completed styling on the page
        span.classList.toggle("completed");

        // Here is where you would call the database toggle
        // (once you have a backend set up to connect the two files)
        // toggleTask(taskName);
    });

    // Finds delete button inside this specific task
    const deleteButton = li.querySelector(".delete-btn");

    // Runs when delete button is clicked
    deleteButton.addEventListener("click", () => {

        // Gets the name of the task being deleted
        const taskName = span.textContent;
        console.log(`Deleted task: ${taskName}`);

        // Removes task from page
        li.remove();

        // Here is where you would call the database delete
        // deleteTask(taskName);
    });

    // Adds task to the list on the page
    document.getElementById("taskList").appendChild(li);
}
