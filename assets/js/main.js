import { preencherListas, setTarefa } from "./functions.js";

const TODO_LIST = document.querySelector("#todo-list");
const DONE_LIST = document.querySelector("#done-list");
const ADD_BTN = document.querySelector("#todo-btn");

preencherListas(TODO_LIST, DONE_LIST);

ADD_BTN.addEventListener("click", (event) => {
    const INPUT = document.querySelector("#novo-item");
    let tarefa = INPUT.value;
    setTarefa(tarefa);
    preencherListas(TODO_LIST, DONE_LIST);
    INPUT.value = "";
});

