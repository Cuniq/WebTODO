const liTodoItemClassname = 'todo-list-item';
const spanTodoItemClassname = 'todo-list-span';

/*
    Well mr. web browsers are caching input values and it fucking triggers me :)
    Just set it to default god damn it.
*/
function resetInput() {
    const inputText = document.querySelector('.todo-node input');
    inputText.value = '';
}

function addNodesButtonAndInputEvents() {
    const newTodoItemButtons = document.querySelectorAll('.todo-title > button');
    const listItemsWithInput = document.querySelectorAll('.todo-node > ul > li:first-child');

    for (let index = 0; index < newTodoItemButtons.length; index++) {
        const nodeButton = newTodoItemButtons[index];
        const nodeLiWithInput = listItemsWithInput[index];
        const input = nodeLiWithInput.children[0];

        nodeButton.onclick = function (event) {
            nodeLiWithInput.classList.toggle('hidden');
        };

        nodeLiWithInput.onkeydown = function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                if (!input.value) return;

                nodeLiWithInput.parentElement.appendChild(createLiNodeItem(input.value));
                input.value = '';
            }
        };
    }
}

function createLiNodeItem(inputValue) {
    const liNode = document.createElement('li');
    liNode.classList.add(liTodoItemClassname);
    const spanNode = document.createElement('span');
    spanNode.classList.add(spanTodoItemClassname);
    liNode.appendChild(spanNode);
    liNode.appendChild(document.createTextNode(inputValue));
    return liNode;
}

function setGlobalClickEvents() {
    document.onclick = function (event) {
        const element = event.target;
        if (element.tagName === 'LI' && element.classList.contains(liTodoItemClassname)) {
            element.classList.toggle('deleted-text');
        }
        if (element.tagName === 'SPAN' && element.classList.contains(spanTodoItemClassname)) {
            element.parentElement.remove();
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