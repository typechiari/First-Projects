// function for allow drop
function allowDrop(event) {
    event.preventDefault();
}

// function for drag
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// function for drop
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggableElement = document.getElementById(data);
    var targetElement = event.target;

    // verify if destination div has the correct id for the image
    if (targetElement.id === "0" && draggableElement.id === "dog") {
        targetElement.appendChild(draggableElement);
        targetElement.querySelector("h2").style.display = "none";
    } else if (targetElement.id === "1" && draggableElement.id === "parrot") {
        targetElement.appendChild(draggableElement);
        targetElement.querySelector("h2").style.display = "none";
    } else if (targetElement.id === "2" && draggableElement.id === "cat") {
        targetElement.appendChild(draggableElement);
        targetElement.querySelector("h2").style.display = "none";
    }
}