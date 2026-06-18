const todo_list = document.getElementById("todo_list");
const todo_input = document.getElementById("todo_input");

const task_list = []

window.CreateTask = async function CreateTask(completed) {
  console.log("CreateTask called with", todo_input.value)
  let inputValue = todo_input.value

  if (todo_input.value == "") {
    alert("Please actually type something bro");
    return;
  }
  task_list.push(inputValue)

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
  });

  const delete_btn = document.createElement("button");
  delete_btn.textContent = "Delete";
  delete_btn.classList.add("delete-button")

  delete_btn.addEventListener("click", () => {
    todo_list.removeChild(todo_item);
  });

  todo_item.appendChild(checkbox);
  todo_item.appendChild(span);
  todo_item.appendChild(delete_btn);

  todo_list.appendChild(todo_item);

  todo_input.value = "";
}

window.SubmitPreset = async function SubmitPreset() {
  document.getElementById("preset-modal").classList.remove("hidden");
  document.getElementById("preset-name-input").focus();
}

window.cancelPresetModal = function() {
  document.getElementById("preset-modal").classList.add("hidden");
  document.getElementById("preset-modal-error").classList.add("hidden");
}

window.confirmPresetModal = async function() {
  const preset_name = document.getElementById("preset-name-input").value.trim();
  const preset_author = document.getElementById("preset-author-input").value.trim();
  const preset_desc = document.getElementById("preset-desc-input").value.trim();
  const errEl = document.getElementById("preset-modal-error");

  if (!preset_name) {
    errEl.textContent = "Thou must name thy preset!";
    errEl.classList.remove("hidden");
    return;
  }

  if (!preset_desc) {
    errEl.textContent = "A description would be nice, traveler!";
    errEl.classList.remove("hidden");
    return;
  }

  errEl.classList.add("hidden");

  const response = await fetch('http://127.0.0.1:5000/create_preset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'

    },
    body: JSON.stringify({
      task_list: task_list,
      preset_name: preset_name,
      preset_desc: preset_desc,
      preset_author: preset_author || undefined,
    }),
  });

  const result = await response.json();

  console.log(result);

  document.getElementById("preset-modal").classList.add("hidden");
  document.getElementById("preset-name-input").value = "";
  document.getElementById("preset-author-input").value = "";
  document.getElementById("preset-desc-input").value = "";
}
