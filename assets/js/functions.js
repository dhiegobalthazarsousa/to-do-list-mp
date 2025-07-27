function preencherListas(todoList, doneList) {
    zerarListasElemento(todoList, doneList);
    let tarefas = getTarefas();
    if(tarefas.length != 0){
    tarefas.forEach((tarefa) => {
        let li = document.createElement("li");
        li.textContent = tarefa.tarefa;
        li.id = tarefa.tarefa.replace(" ","-");
        li.addEventListener("click", (event) => {
            concluirTarefa(event.target.textContent, todoList, doneList);
        });
        if (tarefa.status === "pendente") {
            todoList.appendChild(li);
        } else {
            doneList.appendChild(li);
        }
    });
    }
}

function zerarListasElemento(todoList, doneList){
    todoList.innerHTML = "";
    doneList.innerHTML = "";
}

function concluirTarefa(tarefaConcluida, todoList, doneList){
    let tarefas = getTarefas();
    tarefas.forEach((tarefa) => {
        if(tarefa.tarefa === tarefaConcluida){
            tarefa.status = 'concluída';
        }
    });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    preencherListas(todoList, doneList);
}

function insert(input, todoList, doneList){
    let tarefa = input.value;
    setTarefaLocalStorage(tarefa);
    preencherListas(todoList, doneList);
    input.value = "";
}

function setTarefaLocalStorage(tarefa) {
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

export { setTarefaLocalStorage, preencherListas, insert};