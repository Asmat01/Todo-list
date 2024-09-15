let taskInput = document.querySelector("#todo");
let btn1 = document.querySelector("#addTaskButton");
let btn2 = document.querySelector("#delTaskButton");
let ul = document.querySelector(".tasklist");

// event listener in input box to get value
taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      let taskValue = e.target.value;
      let newLi = document.createElement("li");
      newLi.textContent = taskValue;
      ul.appendChild(newLi);
      // Clear the input box after adding the task
        taskInput.value = "";
      //drwa line through the task when clicked============================>from W3Schools
      newLi.addEventListener("click", () => {
        newLi.style.textDecoration = "line-through";
      });
      // Add a "checked" symbol when clicking on a list item==================>from W3Schools
      var list = document.querySelector("ul");
      list.addEventListener("click",function (ev) {
          if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");}
        },false);
    }
});
//add event listener to the add task button
btn1.addEventListener("click", () => {
    if (taskInput.value === "") {
        alert("Please enter a task");
        return;
    }else {
      let taskValue = taskInput.value;
      let newLi = document.createElement("li");
      newLi.textContent = taskValue;
      ul.appendChild(newLi);
      taskInput.value = "";
     //drwa line through the task when clicked===============================>from W3Schools
      newLi.addEventListener("click", () => {
        newLi.style.textDecoration = "line-through";
      });
      // Add a "checked" symbol when clicking on a list item==================>from W3Schools
      var list = document.querySelector("ul");
      list.addEventListener("click",function (ev) {
          if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");}
        },false);
    }
});
//add event listener to the delete task button
btn2.addEventListener("click", () => {
    let li = document.querySelector(".tasklist li:nth-child(1)");
    if (li) {ul.removeChild(li);}
});

