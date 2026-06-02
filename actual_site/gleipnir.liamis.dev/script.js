// This is a basic commnet
//Getting ids for Item
const todo_list = document.getElementById("todo_list");
const todo_input = document.getElementById("todo_input");
// Create the function
function CreateTask(task_name) {
  console.log("CreateTask called with", task_name)
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

function preset_work() {
  CreateTask("Find A girlfriend")
  CreateTask("Finish Project")
  CreateTask("Hit on coworkers ")
}

function preset_school() {
  CreatTask("Do some research for scienc")
  CreatTask("Play Some amongus!")
  CreateTask("Do ELA homework")
}

function preset_fun() {
  CreateTask("Make a videogame")
  CreateTask("Find a new friend")
  CreateTask("Listen to some greenday")
}

async function send_message() {
  const payload = {"message": "Hello from ur buddy javascript"};
  
  const response await fetch ('http://127.0.0.1:5000/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    
    },
    body: JSON.stringify(payload)

  }); 

  const result = await response.json;
  
  console.log(result);

}
