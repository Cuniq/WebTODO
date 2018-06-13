function dragElement() {
    const todoNode = document.getElementsByClassName('todo-node');
    let mouseDistanceX = 0,
        mouseDistanceY = 0,
        previousMouseX = 0,
        previousMouseY = 0;

    for (const todo of todoNode) {
        todo.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        previousMouseX = e.clientX;
        previousMouseY = e.clientY;

        e.currentTarget.onmouseup = closeDragElement;
        e.currentTarget.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        mouseDistanceX = previousMouseX - e.clientX;
        mouseDistanceY = previousMouseY - e.clientY;
        previousMouseX = e.clientX;
        previousMouseY = e.clientY;

        e.currentTarget.style.top = (e.currentTarget.offsetTop - mouseDistanceY) + "px";
        if (e.currentTarget.style.top < '0px') {
            e.currentTarget.style.top = 0;
        }

        e.currentTarget.style.left = (e.currentTarget.offsetLeft - mouseDistanceX) + "px";
        if (e.currentTarget.style.left < '0px') {
            e.currentTarget.style.left = 0;
        }
    }

    function closeDragElement(e) {
        e.currentTarget.onmouseup = null;
        e.currentTarget.onmousemove = null;
    }
}