const phrase = "37 meses amorcito";
const shuffledLetters = phrase.split("").sort(() => Math.random() - 0.5);

const container = document.getElementById("letters-container");
const message = document.getElementById("message");

// Crear y agregar las letras desordenadas
shuffledLetters.forEach(letter => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.classList.add("letter");
    span.setAttribute("draggable", true);
    span.addEventListener("dragstart", dragStart);
    span.addEventListener("dragover", dragOver);
    span.addEventListener("drop", drop);
    container.appendChild(span);
});

let draggedItem = null;

function dragStart(event) {
    draggedItem = event.target;
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    if (event.target.classList.contains("letter")) {
        let temp = draggedItem.textContent;
        draggedItem.textContent = event.target.textContent;
        event.target.textContent = temp;
    }
    checkOrder();
}

function checkOrder() {
    const currentPhrase = Array.from(container.children).map(el => el.textContent).join("");
    if (currentPhrase === phrase) {
        message.classList.remove("hidden");
    }
}
