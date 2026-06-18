import markdownIt from 'markdown-it';

const md = markdownIt();

const testPlansMarkdown = `# Gleipnir — Test Plans

A brave QA traveler must verify these sacred quests before the realm is deemed stable.

---

## 1. Core Quest Flow

- [ ] Create a task by typing in the input and clicking **Submit**
- [ ] Verify the task appears in the list with a checkbox and delete button
- [ ] Check the checkbox — task should get struck through
- [ ] Uncheck the checkbox — strikethrough should disappear
- [ ] Click **Delete** — task should vanish from the list
- [ ] Try submitting an empty input — should see an alert

## 2. Preset System

- [ ] Click **Summon** on a preset — tasks should populate the list
- [ ] Click **DELETE** on a preset — preset should disappear
- [ ] Verify preset tasks get created with correct names

## 3. Assignee Feature

- [ ] Change the assignee dropdown on a task
- [ ] Refresh the page — assignee should persist
- [ ] Verify the dropdown shows all options: No one, Liam, Zippy, Ben, Eli, Anika, Janie, Global

## 4. Backend Resilience

- [ ] Kill the Flask server, then try to create a task — should handle gracefully
- [ ] Restart the server, refresh — tasks should load from DB
- [ ] Check the PostgreSQL database directly:
  \\\`\\\`\\\`
  psql -U liam -d funnytodo -c "SELECT * FROM task"
  \\\`\\\`\\\`

## 5. Edge Cases

- [ ] Create a task with the same name twice — should show "already exists" error
- [ ] Create many tasks and verify scrolling works
- [ ] Check a task, delete it, then check the DB still has the others
- [ ] Test with special characters: \\\`~!@#$%^&*()_+-=[]{}|;':",./<>\`?

---

*"A bug found today is a dragon slain before the morrow."*
`;

function renderTestPlans() {
  const content = document.getElementById("test-plans-content");
  if (!content) return;
  content.innerHTML = md.render(testPlansMarkdown);
}

window.toggleTestPlans = function() {
  const panel = document.getElementById("test-plans-panel");
  if (!panel) return;
  panel.classList.toggle("open");
  if (panel.classList.contains("open")) {
    renderTestPlans();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  get_all()
  display_presets()
})

const todo_list = document.getElementById("todo_list");
const todo_input = document.getElementById("todo_input");
const preset_list = document.getElementById("preset_list");
const assigneeOptions = ["No one", "Liam", "Zippy", "Ben", "Eli", "Anika", "Janie", "Global"];
// Create the function

async function display_presets() {

  const response = await fetch('http://127.0.0.1:5000/allpresets');

  const result = await response.json();

  const presets = result.presets;

  for (const preset of presets) {
    create_preset(preset.name, preset.author, preset.desc)
  }

}

function create_preset(preset_name, preset_author, preset_desc) {
  const preset_container = document.createElement("div");
  preset_container.classList.add("preset_container");

  const title = document.createElement("h1");
  title.textContent = `${preset_name} Author: ${preset_author}`;

  const description = document.createElement("p");
  description.textContent = preset_desc;
  description.classList.add("preset_desc");

  const summon_button = document.createElement("button");
  summon_button.textContent = "Summon";
  summon_button.classList.add("preset_summon");

  const delete_button = document.createElement("button");
  delete_button.textContent = "DELETE";
  delete_button.classList.add("delete-button");

  summon_button.addEventListener("click", () => {
    load_preset(preset_name);
  });

  delete_button.addEventListener("click", () => {
    preset_container.remove();
    preset_delete(preset_name);
  });

  preset_container.appendChild(title);
  preset_container.appendChild(description);
  preset_container.appendChild(summon_button);
  preset_container.appendChild(delete_button);

  preset_list.appendChild(preset_container);

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
    CreateTask(task, false, "No one");
  }

}
async function create_task_DBSkip(task_name, completed, assigned_to) {
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

  if (assigned_to == null || assigned_to == "" || assigned_to == undefined) {
    assigned_to = "No one";
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

  const assignee_dropdown = create_assignee_dropdown(inputValue, assigned_to);

  todo_item.appendChild(checkbox);
  todo_item.appendChild(span);
  todo_item.appendChild(assignee_dropdown);
  todo_item.appendChild(delete_btn);

  todo_list.appendChild(todo_item);

  todo_input.value = "";
}
window.CreateTask = async function CreateTask(task_name, completed, assigned_to) {
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

  if (assigned_to == null || assigned_to == "" || assigned_to == undefined) {
    assigned_to = "No one";
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

  const assignee_dropdown = create_assignee_dropdown(inputValue, assigned_to);

  todo_item.appendChild(checkbox);
  todo_item.appendChild(span);
  todo_item.appendChild(assignee_dropdown);
  todo_item.appendChild(delete_btn);

  todo_list.appendChild(todo_item);

  todo_input.value = "";

}

function create_assignee_dropdown(task_name, assigned_to) {
  const wrapper = document.createElement("label");
  wrapper.classList.add("assignee_dropdown_wrapper");

  const labelText = document.createElement("span");
  labelText.textContent = "Assigned to";
  labelText.classList.add("assignee_label");

  const select = document.createElement("select");
  select.classList.add("assignee_dropdown");
  select.setAttribute("aria-label", `Assign ${task_name} to someone`);

  for (const person of assigneeOptions) {
    const option = document.createElement("option");
    option.value = person;
    option.textContent = person;
    select.appendChild(option);
  }

  select.value = assigneeOptions.includes(assigned_to) ? assigned_to : "No one";

  select.addEventListener("change", () => {
    assign_task(task_name, select.value);
  });

  wrapper.appendChild(labelText);
  wrapper.appendChild(select);

  return wrapper;
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
    const assigned_to = task.assigned_to;
    create_task_DBSkip(task_name, completed, assigned_to);

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

async function assign_task(task_name, assigned_to) {
  const payload = { "task_name": task_name, "assigned_to": assigned_to };

  const response = await fetch('http://127.0.0.1:5000/assigntask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'

    },
    body: JSON.stringify(payload)

  });

  const result = await response.json();

  console.log(result);

}

async function preset_delete(preset_name) {
  const payload = { "preset_name": preset_name };

  const response = await fetch('http://127.0.0.1:5000/delete_preset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'

    },
    body: JSON.stringify(payload)

  });

  const result = await response.json();

  console.log(result);

}

