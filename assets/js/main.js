import { preencherListas, insert } from "./functions.js";

const TODO_LIST = document.querySelector("#todo-list");
const DONE_LIST = document.querySelector("#done-list");
const ADD_BTN = document.querySelector("#todo-btn");

preencherListas(TODO_LIST, DONE_LIST);

ADD_BTN.addEventListener("click", () => {
    const input = document.querySelector("#novo-item");
    insert(input, TODO_LIST, DONE_LIST);
});

document.addEventListener("keypress", (event) => {
    if(event.key === 'Enter'){
        const input = document.querySelector("#novo-item");
        insert(input, TODO_LIST, DONE_LIST);
    }
})

