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
  todo_item.textContent = inputValue;
  todo_list.appendChild(todo_item);

  todo_input.value = "";
}



