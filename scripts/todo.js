/*
    Well mr. web browsers are caching input values and it fucking triggers me :)
    Just set it to default god damn it.
*/
function resetInput() {
    const inputText = document.querySelector('.todo-node input');
    inputText.value = '';
}

function addNewTodoItemButtonEvent() {
    const newTodoItemButtons = document.querySelectorAll('.todo-title > button');
    const listItemsWithInput = document.querySelectorAll('.todo-node > ul > li:first-child');

    for (let index = 0; index < newTodoItemButtons.length; index++) {
        const button = newTodoItemButtons[index];
        button.onclick = function (event) {
            listItemsWithInput[index].classList.toggle('hidden');
        }
    }
}

function alignTodoNodes() {
    const todoNodes = document.getElementsByClassName('todo-node');
    for (let index = 0; index < todoNodes.length; index++) {
        const element = todoNodes[index];
        element.style.left = element.offsetWidth * index + 'px';
    }
}