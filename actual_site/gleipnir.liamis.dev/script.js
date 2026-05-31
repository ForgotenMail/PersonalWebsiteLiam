// This is a basic commnet
//Getting ids for Item
const todo_list = document.getElementById("todo_list");
const todo_input = document.getElementById("todo_input");
// Create the function
function CreateTask(task_name) {
  let inputValue;

  if (task_name == undefined) {

    if (todo_input.value == "") {
        alert("Please actually type something bro");
        return;
      }
     inputValue = todo_input.value;
}

  else {
     inputValue = task_name;
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

    todo_list.appendChild(todo_item);

    todo_input.value = "";

}

preset_work() {
  
}

