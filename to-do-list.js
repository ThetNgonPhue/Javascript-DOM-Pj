let todoList = [];
let add = document.getElementById("add");

function addTodoItem() {
  let item = document.getElementById("new-list-item");
  let text = item.value;
  todoList.push("text");

  let list = document.querySelector("ul");

  let listItem = document.createElement("li");
  listItem.className = "new-item";

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = function () {
    if (checkbox.checked) {
      itemText.style.textDecoration = "line-through";
      listItem.classList.add("checked");
    } else {
      itemText.style.textDecoration = "none";
      listItem.classList.remove("checked");
    }
  };
  listItem.appendChild(checkbox);

  let itemText = document.createElement("span");
  itemText.textContent = text;
  listItem.appendChild(itemText);

  let buttonDiv = document.createElement("div");
  listItem.appendChild(buttonDiv);

  let editButton = document.createElement("button");
  editButton.innerHTML = '<i class=" edit fas fa-edit"></i>';
  editButton.onclick = function () {
    itemText.contentEditable = true;
    itemText.focus();
  };
  buttonDiv.appendChild(editButton);

  itemText.onblur = function () {
    itemText.contentEditable = false;
  };

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="delete fas fa-trash"></i>';
  deleteButton.onclick = function () {
    list.removeChild(listItem);
    if (list.children.length < 1) {
      actionText.style.display = "block";
    }
  };
  buttonDiv.appendChild(deleteButton);

  list.appendChild(listItem);

  let actionText = document.getElementById("action-text");
  if (list.children.length >= 1) {
    actionText.style.display = "none";
  }

  item.value = "";
}
