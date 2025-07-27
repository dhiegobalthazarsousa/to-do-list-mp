function preencherListas(todoList, doneList) {
    todoList.innerHTML = "";
    doneList.innerHTML = "";
    let tarefas = getTarefas();
    tarefas.forEach((tarefa) => {
        let li = document.createElement("li");
        li.textContent = tarefa.tarefa;
        li.id = tarefa.tarefa;
        if (tarefa.status === "pendente") {
            todoList.appendChild(li);
        } else {
            doneList.appendChild(li);
        }
    });
    console.log("foi");
}

function setTarefa(tarefa) {
    if (tarefa) {
        let tarefas = getTarefas();
        tarefas.push({ tarefa, status: "pendente" });
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }
}

function getTarefas() {
    let tarefas = Array();
    if (localStorage.hasOwnProperty("tarefas")) {
        tarefas = JSON.parse(localStorage.getItem("tarefas"));
    }
    return tarefas;
}

export { setTarefa, preencherListas };