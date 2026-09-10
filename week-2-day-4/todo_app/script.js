const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span>${task.text}</span>
            <button class="delete-btn" data-index="${index}">
                Delete
            </button>
        `;

        li.setAttribute("data-index", index);

        taskList.appendChild(li);
    });
}

addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();

    if (text === "") return;

    tasks.push({
        text,
        completed: false
    });

    saveTasks();
    renderTasks();

    taskInput.value = "";
});

taskList.addEventListener("click", (event) => {

    const li = event.target.closest("li");

    if (!li) return;

    const index = li.dataset.index;

    if (event.target.classList.contains("delete-btn")) {

        tasks.splice(index, 1);

    } else {

        tasks[index].completed =
            !tasks[index].completed;
    }

    saveTasks();
    renderTasks();
});

renderTasks();