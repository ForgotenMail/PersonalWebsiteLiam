const todo_list = document.getElementById("todo_list");
const todo_input = document.getElementById("todo_input");

const task_list = []

async function CreateTask(completed) {
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

async function SubmitPreset() {
  const preset_name = prompt("What is the name of the preset?");
  const preset_desc = prompt("Please enter in a breif description of your preset!")
  const response = await fetch('http://127.0.0.1:5000/create_preset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'

    },
    body: JSON.stringify({
      task_list: task_list,
      preset_name: preset_name,
      preset_desc: preset_desc,

    }),
  });

  const result = await response.json();

  console.log(result);


}

