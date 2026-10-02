let checkCounter = 0;
const errorMsg = document.getElementById("errorMsg");
const newList = document.getElementById("newList");
const completed = document.getElementById("completed");
const input1 = document.getElementById("input1");
const add = document.getElementById("add");
let completedTasks = 0;
const myToDos = [];

add.addEventListener("click", addToList);


function addToList() {
    
    const text = input1.value.trim();

    if(text.length === 0) {
        errorMsg.textContent = "You need to type something first";
        return;
    }
    errorMsg.textContent = "";
    
    const todo = {
        text: text,
        completed: false
    };

    myToDos.push(todo);

    const item = document.createElement("li");
    newList.appendChild(item);

  

    const itemLabel = document.createElement("span");
    itemLabel.textContent = text;

    item.appendChild(itemLabel);

    item.addEventListener("click", function() {
        if(todo.completed) {
            todo.completed = false;
            itemLabel.classList.remove("completed");
            completedTasks--;
        } else {
            todo.completed = true;
            itemLabel.classList.add("completed");
            completedTasks++;
        }
        completed.textContent = `${completedTasks} completed`; 
    });

    const remove = document.createElement("span");
    remove.textContent = "🗑️";
    remove.classList.add("remove");

    remove.addEventListener("click", function(event) {
        event.stopPropagation();
        const index = myToDos.indexOf(todo);
        if(index !== -1) {
            myToDos.splice(index, 1);
        }
        if(todo.completed) {
            completedTasks--;
            completed.textContent = `${completedTasks} completed`;
        }
        item.remove();
    });

    item.appendChild(remove);

    input1.value = "";
}