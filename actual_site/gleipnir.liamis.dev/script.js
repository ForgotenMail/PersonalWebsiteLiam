import markdownIt from 'markdown-it';
import complianceHtml from './compliance-html.js';

const md = markdownIt();
const API_BASE = 'http://127.0.0.1:5000';

const testPlans = [
  {
    key: 'compliance',
    name: 'Self-Initiated Compliance Report',
    description: 'Test the compliance report flow for Report Mosquitoes Online.',
    htmlContent: complianceHtml
  },
  {
    key: 'presets',
    name: 'Presets & Assignees',
    description: 'Test preset loading, task population, and the assignee feature.',
    markdown: `## Preset System

- [ ] Click **Summon** on a preset — tasks should populate the list
- [ ] Click **DELETE** on a preset — preset should disappear
- [ ] Verify preset tasks get created with correct names

## Assignee Feature

- [ ] Change the assignee dropdown on a task
- [ ] Refresh the page — assignee should persist
- [ ] Verify the dropdown shows all options: No one, Liam, Zippy, Ben, Eli, Anika, Janie, Global`
  },
  {
    key: 'edge',
    name: 'Backend & Edge Cases',
    description: 'Resilience checks, duplicate handling, and special character support.',
    markdown: `## Backend Resilience

- [ ] Kill the Flask server, then try to create a task — should handle gracefully
- [ ] Restart the server, refresh — tasks should load from DB
- [ ] Check the PostgreSQL database directly:
  \`\`\`
  psql -U liam -d funnytodo -c "SELECT * FROM task"
  \`\`\`

## Edge Cases

- [ ] Create a task with the same name twice — should show "already exists" error
- [ ] Create many tasks and verify scrolling works
- [ ] Check a task, delete it, then check the DB still has the others
- [ ] Test with special characters: \`~!@#$%^&*()_+-=[]{}|;':",./<>\`?`
  }
];

let activeTestPlan = 'compliance';

async function initTestPlansFromDB() {
  try {
    const response = await fetch(`${API_BASE}/test_plans`);
    const result = await response.json();
    if (result.test_plans) {
      for (const plan of result.test_plans) {
        const exists = testPlans.some(p => p.key === plan.key);
        if (!exists) {
          plan.fromDB = true;
          testPlans.push(plan);
        }
      }
    }
  } catch (err) {
    console.log('Could not load test plans from DB:', err);
  }
}

window.openCreateTestPlanModal = function() {
  document.getElementById("create-test-plan-modal").classList.remove("hidden");
  document.getElementById("test-plan-title-input").focus();
};

window.cancelCreateTestPlanModal = function() {
  document.getElementById("create-test-plan-modal").classList.add("hidden");
  document.getElementById("create-test-plan-error").classList.add("hidden");
  document.getElementById("test-plan-title-input").value = "";
  document.getElementById("test-plan-desc-input").value = "";
  document.getElementById("test-plan-markdown-input").value = "";
};

window.confirmCreateTestPlanModal = async function() {
  const title = document.getElementById("test-plan-title-input").value.trim();
  const description = document.getElementById("test-plan-desc-input").value.trim();
  const markdown = document.getElementById("test-plan-markdown-input").value.trim();
  const errEl = document.getElementById("create-test-plan-error");

  if (!title) {
    errEl.textContent = "Thou must name thy test plan!";
    errEl.classList.remove("hidden");
    return;
  }

  if (!markdown) {
    errEl.textContent = "Markdown content is required, traveler!";
    errEl.classList.remove("hidden");
    return;
  }

  errEl.classList.add("hidden");

  const response = await fetch(`${API_BASE}/create_test_plan`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      description: description,
      markdown: markdown
    }),
  });

  const result = await response.json();

  if (result.status === "error") {
    errEl.textContent = result.message || "Creation failed!";
    errEl.classList.remove("hidden");
    return;
  }

  const newPlan = result.test_plan;
  newPlan.fromDB = true;
  testPlans.push(newPlan);
  renderTestPlanSelector();

  document.getElementById("create-test-plan-modal").classList.add("hidden");
  document.getElementById("test-plan-title-input").value = "";
  document.getElementById("test-plan-desc-input").value = "";
  document.getElementById("test-plan-markdown-input").value = "";
};

function renderTestPlanSelector() {
  const selector = document.getElementById("test-plan-selector");
  if (!selector) return;
  selector.innerHTML = '';
  testPlans.forEach(plan => {
    const btn = document.createElement("button");
    btn.className = "test-plan-btn";

    const nameSpan = document.createElement("span");
    nameSpan.className = "test-plan-btn-name";
    nameSpan.textContent = plan.name;

    const descSpan = document.createElement("span");
    descSpan.className = "test-plan-btn-desc";
    descSpan.textContent = plan.description;

    btn.appendChild(nameSpan);
    btn.appendChild(descSpan);

    if (plan.fromDB) {
      const deleteBtn = document.createElement("span");
      deleteBtn.className = "test-plan-delete";
      deleteBtn.textContent = "X";
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        deleteTestPlan(plan.key);
      });
      btn.appendChild(deleteBtn);
    }

    btn.addEventListener("click", () => {
      activeTestPlan = plan.key;
      openTestPlan();
    });

    selector.appendChild(btn);
  });
}

async function deleteTestPlan(key) {
  await fetch(`${API_BASE}/delete_test_plan`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key: key }),
  });

  const idx = testPlans.findIndex(p => p.key === key);
  if (idx !== -1) {
    testPlans.splice(idx, 1);
  }
  renderTestPlanSelector();
}

function openTestPlan() {
  const selectorScreen = document.getElementById("test-plan-selector-screen");
  const contentScreen = document.getElementById("test-plan-content-screen");
  const title = document.getElementById("test-plan-title");
  const content = document.getElementById("test-plans-content");

  const plan = testPlans.find(p => p.key === activeTestPlan);
  if (!plan) return;

  title.textContent = plan.name;
  if (plan.htmlContent) {
    content.innerHTML = plan.htmlContent;
  } else {
    content.innerHTML = md.render(plan.markdown);
  }

  selectorScreen.style.display = "none";
  contentScreen.style.display = "flex";
}

window.backToSelector = function() {
  const selectorScreen = document.getElementById("test-plan-selector-screen");
  const contentScreen = document.getElementById("test-plan-content-screen");

  selectorScreen.style.display = "flex";
  contentScreen.style.display = "none";
};

window.toggleTestPlans = function() {
  const panel = document.getElementById("test-plans-panel");
  if (!panel) return;
  panel.classList.toggle("open");
  if (panel.classList.contains("open")) {
    backToSelector();
    initTestPlansFromDB().then(() => renderTestPlanSelector());
  }
};

document.addEventListener("DOMContentLoaded", () => {
  get_all()
  display_presets()
  initTestPlansFromDB()
})

const todo_list = document.getElementById("todo_list");
const todo_input = document.getElementById("todo_input");
const preset_list = document.getElementById("preset_list");
const assigneeOptions = ["No one", "Liam", "Zippy", "Ben", "Eli", "Anika", "Janie", "Global"];

async function display_presets() {
  const response = await fetch(`${API_BASE}/allpresets`);
  const result = await response.json();

  for (const preset of result.presets) {
    create_preset(preset.name, preset.author, preset.desc);
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

  summon_button.addEventListener("click", () => load_preset(preset_name));
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
  const response = await fetch(`${API_BASE}/presets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "preset_name": preset_name })
  });

  const result = await response.json();

  for (const task of result.tasks) {
    CreateTask(task, false, "No one");
  }
}
async function create_task_DBSkip(task_name, completed, assigned_to) {
  let inputValue;
  if (!task_name) {
    if (todo_input.value === "") {
      alert("Please actually type something bro");
      return;
    }
    inputValue = todo_input.value;
  } else {
    inputValue = task_name;
  }

  if (!completed) {
    completed = false;
  }

  if (!assigned_to) {
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
    span.style.textDecoration = "line-through";
  }

  checkbox.addEventListener("change", () => {
    span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    checkedOff(inputValue);
  });

  const delete_btn = document.createElement("button");
  delete_btn.textContent = "Delete";
  delete_btn.classList.add("delete-button");

  delete_btn.addEventListener("click", () => {
    todo_list.removeChild(todo_item);
    delete_element(inputValue);
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
  let inputValue;

  if (!task_name) {
    if (todo_input.value === "") {
      alert("Please actually type something bro");
      return;
    }
    inputValue = todo_input.value;
  } else {
    inputValue = task_name;
  }

  if (!completed) {
    completed = false;
  }

  if (!assigned_to) {
    assigned_to = "No one";
  }

  const status = await create_element(inputValue, completed);

  if (status === "error") {
    alert("You tried to create a task that already existed!");
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
    span.style.textDecoration = "line-through";
  }

  checkbox.addEventListener("change", () => {
    span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    checkedOff(inputValue);
  });

  const delete_btn = document.createElement("button");
  delete_btn.textContent = "Delete";
  delete_btn.classList.add("delete-button");

  delete_btn.addEventListener("click", () => {
    todo_list.removeChild(todo_item);
    delete_element(inputValue);
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


async function get_all() {
  const response = await fetch(`${API_BASE}/gettasks`);
  const result = await response.json();
  const tasks = result.tasks;

  for (const task of tasks) {
    create_task_DBSkip(task.task_name, task.completed, task.assigned_to);
  }
}


async function create_element(task_name) {
  const payload = { "task_name": task_name };

  const response = await fetch(`${API_BASE}/addelement`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const result = await response.json();

  if (result.status === "error") {
    return "error";
  }

  console.log(result);
}


async function delete_element(task_name) {
  const payload = { "task_name": task_name };

  const response = await fetch(`${API_BASE}/deletetask`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const result = await response.json();
  console.log(result);
}

async function checkedOff(task_name) {
  const payload = { "task_name": task_name };

  const response = await fetch(`${API_BASE}/checkoff`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const result = await response.json();
  console.log(result);
}

async function assign_task(task_name, assigned_to) {
  const payload = { "task_name": task_name, "assigned_to": assigned_to };

  const response = await fetch(`${API_BASE}/assigntask`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const result = await response.json();
  console.log(result);
}

async function preset_delete(preset_name) {
  const payload = { "preset_name": preset_name };

  const response = await fetch(`${API_BASE}/delete_preset`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const result = await response.json();
  console.log(result);
}

