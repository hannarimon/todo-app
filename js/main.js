let taskInput = document.getElementById("task-field");
let addBtn = document.getElementById("add-btn");
let resetBtn = document.getElementById("reset-btn");
let errorMessage = document.getElementById("error")
let todoList = document.getElementById("todo-list");
let doneList = document.getElementById("done-list");

addBtn.addEventListener("click", function () {
        let task = document.createElement("li");
        let input = document.createElement("input");
        input.value = taskInput.value.trim();
        input.disabled = true;

        if (input.value == "") {
                errorMessage.style.color = "#b22525";
                errorMessage.innerHTML = "You have to add something, spaces don't count :)";
        } else {
                errorMessage.innerHTML = "";
                let changeBtn = document.createElement("button");
                changeBtn.innerHTML = "Change";

                changeBtn.addEventListener("click", buttonActions.change);

                let doneBtn = document.createElement("button");
                doneBtn.innerHTML = "Done";
                doneBtn.addEventListener("click", buttonActions.done);

                let removeBtn = document.createElement("button");
                removeBtn.innerHTML = "Remove";
                removeBtn.addEventListener("click", buttonActions.remove);

                taskInput.value = "";
                todoList.appendChild(task);
                task.append(input, changeBtn, doneBtn, removeBtn);
        }
        resetBtn.addEventListener("click", function () {
                taskInput.value = "";
                todoList.innerHTML = "";
                doneList.innerHTML = "";
                errorMessage.innerHTML = "";
        });
});

const buttonActions = {
        change: function (e) {
                if (e.target.parentNode.children[0].value.trim() == "") {
                        errorMessage.style.color = "#e5a114";
                        errorMessage.innerHTML = "You can't save a todo with no info :)";
                } else {
                        errorMessage.innerHTML = "";
                        e.target.parentNode.children[0].value = e.target.parentNode.children[0].value.trim();
                        if (e.target.parentNode.children[0].disabled == true) {
                                e.target.parentNode.children[0].disabled = false;
                                e.target.innerHTML = "Save";
                        } else {
                                e.target.parentNode.children[0].disabled = true;
                                e.target.innerHTML = "Change";
                        }

                }
        },

        done: function (e) {
                if (e.target.parentNode.children[0].value.trim() == "") {
                        errorMessage.style.color = "#b22525";
                        errorMessage.innerHTML = "You can't press done with an empty todo :)";
                } else {
                        e.target.parentNode.children[2].style.display = "none";
                        doneList.append(e.target.parentNode);

                }
        },

        remove: function (e) {
                e.target.parentNode.remove();
                errorMessage.innerHTML = "";
        }
};