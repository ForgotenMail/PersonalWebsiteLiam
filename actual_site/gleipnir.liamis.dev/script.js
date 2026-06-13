document.addEventListener("DOMContentLoaded", () => {
  get_all()
  display_presets()
})

const todo_list = document.getElementById("todo_list");
const todo_input = document.getElementById("todo_input");
const preset_list = document.getElementById("preset_list");
// Create the function

async function display_presets() {

  const response = await fetch('http://127.0.0.1:5000/allpresets');

  const result = await response.json();

  const presets = result.presets;

  for (const preset of presets) {
    create_preset(preset);
  }

}

function create_preset(preset_name) {

  const preset_button = document.createElement("button");
  preset_button.textContent = preset_name;
  preset_button.classList.add("preset_button");

  preset_button.addEventListener("click", () => {
    load_preset(preset_name);
  });
  preset_list.appendChild(preset_button);

}

async function load_preset(preset_name) {

  const payload = { "preset_name": preset_name };

  const response = await fetch('http://127.0.0.1:5000/presets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'

    },
    body: JSON.stringify(payload)

  });

  const result = await response.json();

  const tasks = result.tasks;

  for (const task of tasks) {
    CreateTask(task);
  }

}
async function create_task_DBSkip(task_name, completed,) {
  console.log("CreateTask called with", task_name)
  let inputValue;
  if (task_name == undefined || task_name == null || task_name == "") {

    if (todo_input.value == "") {
      alert("Please actually type something bro");
      return;
    }
    inputValue = todo_input.value;
  }

  else {
    inputValue = task_name;
  }


  if (completed == null || completed == "" || completed == undefined) {
    completed = false;

  }





  const span = document.createElement("span");
  span.textContent = inputValue;

  const todo_item = document.createElement("li");
  todo_item.classList.add("todo_item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;

  if (completed) {
    span.style.textDecoration = "line-through"
  }

  checkbox.addEventListener("change", () => {
    span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    checkedOff(inputValue);
  });



  const delete_btn = document.createElement("button");
  delete_btn.textContent = "Delete";
  delete_btn.classList.add("delete-button")

  delete_btn.addEventListener("click", () => {
    todo_list.removeChild(todo_item);
    delete_element(inputValue)
  });

  todo_item.appendChild(checkbox);
  todo_item.appendChild(span);
  todo_item.appendChild(delete_btn);

  todo_list.appendChild(todo_item);

  todo_input.value = "";
}
async function CreateTask(task_name, completed,) {
  console.log("CreateTask called with", task_name)
  let inputValue;

  if (task_name == undefined || task_name == null || task_name == "") {

    if (todo_input.value == "") {
      alert("Please actually type something bro");
      return;
    }
    inputValue = todo_input.value;
  }

  else {
    inputValue = task_name;
  }


  if (completed == null || completed == "" || completed == undefined) {
    completed = false;

  }

  const status = await create_element(inputValue, completed);

  if (status == "error") {
    alert("You tried to create a task that already existed!")
    return;

  }




  const span = document.createElement("span");
  span.textContent = inputValue;

  const todo_item = document.createElement("li");
  todo_item.classList.add("todo_item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;

  if (completed) {
    span.style.textDecoration = "line-through"
  }

  checkbox.addEventListener("change", () => {
    span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    checkedOff(inputValue);
  });


  const delete_btn = document.createElement("button");
  delete_btn.textContent = "Delete";
  delete_btn.classList.add("delete-button")

  delete_btn.addEventListener("click", () => {
    todo_list.removeChild(todo_item);
    delete_element(inputValue)
  });

  todo_item.appendChild(checkbox);
  todo_item.appendChild(span);
  todo_item.appendChild(delete_btn);

  todo_list.appendChild(todo_item);

  todo_input.value = "";

}
function preset_work() {

  CreateTask("Find A girlfriend")
  CreateTask("Finish Project")
  CreateTask("Hit on coworkers ")
}

function preset_school() {
  CreateTask("Do some research for scienc")
  CreateTask("Play Some amongus!")
  CreateTask("Do ELA homework")
}

async function preset_fun() {
  CreateTask("Make a videogame")
  CreateTask("Find a new friend")
  CreateTask("Listen to some greenday")
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

async function get_all() {

  const response = await fetch('http://127.0.0.1:5000/gettasks');

  const result = await response.json();

  const tasks = result.tasks;

  for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i]);
    let task = tasks[i];
    const task_name = task.task_name;
    const completed = task.completed;
    create_task_DBSkip(task_name, completed);

  }
}


async function create_element(task_name) {
  const payload = { "task_name": task_name };

  const response = await fetch('http://127.0.0.1:5000/addelement', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'

    },
    body: JSON.stringify(payload)

  });

  const result = await response.json();

  if (result.status == "error") {

    return "error";
  }

  console.log(result);

}


async function message() {
  const payload = { "message": "this is a funny message from ur bro javascript" };

  const response = await fetch('http://127.0.0.1:5000/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'

    },
    body: JSON.stringify(payload)

  });

  const result = await response.json();

  console.log(result);

}

async function delete_element(task_name) {
  const payload = { "task_name": task_name };

  const response = await fetch('http://127.0.0.1:5000/deletetask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'

    },
    body: JSON.stringify(payload)

  });

  const result = await response.json();

  console.log(result);

}

async function checkedOff(task_name) {
  const payload = { "task_name": task_name };

  const response = await fetch('http://127.0.0.1:5000/checkoff', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'

    },
    body: JSON.stringify(payload)

  });

  const result = await response.json();

  console.log(result);

}

