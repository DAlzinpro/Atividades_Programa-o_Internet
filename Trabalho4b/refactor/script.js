document.getElementById("task-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Captura os dados do formulário
    const taskName = document.getElementById("task-name").value;
    const priority = document.getElementById("priority").value;

    // Cria o item de tarefa
    const taskItem = document.createElement("li");
    taskItem.classList.add(priority);

    // Adiciona o nome da tarefa
    taskItem.innerHTML = `
        <span class="task-name">${taskName}</span>
        <div>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
            <button class="confirm">Confirm</button>
        </div>
    `;

    // Adiciona os botões de ação
    taskItem.querySelector(".delete").addEventListener("click", function() {
        taskItem.remove();
    });

    taskItem.querySelector(".edit").addEventListener("click", function() {
        const newName = prompt("Edit Task", taskName);
        if (newName) {
            taskItem.querySelector(".task-name").textContent = newName;
        }
    });

    taskItem.querySelector(".confirm").addEventListener("click", function() {
        taskItem.querySelector(".task-name").style.textDecoration = "line-through"; // Risca a tarefa
        // Desabilita todos os botões após confirmar
        taskItem.querySelector(".confirm").disabled = true;
        taskItem.querySelector(".edit").disabled = true;
        taskItem.querySelector(".delete").disabled = true;
    });

    // Adiciona a tarefa na lista
    document.getElementById("task-list").appendChild(taskItem);

    // Limpa o campo de input
    document.getElementById("task-name").value = "";
});
