// Get the tasks from localStorage when the page loads
window.addEventListener("load", () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach((taskText) => {
      const listItem = createTaskElement(taskText);
      todoList.appendChild(listItem);
    });
  });
  
  // Function to create a task element
  function createTaskElement(taskText) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn">Delete</button>
    `;
  
    const deleteBtn = listItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
      listItem.remove();
      updateLocalStorage();
    });
  
    return listItem;
  }
  
  // Function to update localStorage
  function updateLocalStorage() {
    const tasks = Array.from(todoList.children).map((listItem) =>
      listItem.querySelector("span").textContent
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  // Event listener for form submission
  todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const taskText = todoInput.value.trim();
    if (taskText !== "") {
      const listItem = createTaskElement(taskText);
      todoList.appendChild(listItem);
      todoInput.value = "";
      updateLocalStorage();
    }
  });
  