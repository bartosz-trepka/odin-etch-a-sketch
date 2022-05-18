function createGrid(counter) {
    for (let i = 0; i < counter; i++) {
        for (let j = 0; j < counter; j++) {
            appendString += `<div class='box' style="width: ${100/counter}%"></div>`;
        }
    }
    container.innerHTML = appendString;
    appendString = "";

    addHover();
}

function addHover() {
    for (let i = 0; i < gridList.length; i++) {
        gridList[i].addEventListener('mouseenter', () => {
            gridList[i].classList += ' hovered';
        });
    }
}

const container = document.getElementById('container');
const gridList = container.getElementsByTagName('div');
const newGridButton = document.getElementById('new-grid');

let appendString = "";
let counter = 16;

createGrid(counter);

newGridButton.addEventListener('click', () => {
    counter = prompt('Insert new grid size:', parseInt(16));

    while (counter > 100 || counter < 1 || isNaN(counter)) {
        counter = prompt('Insert new grid size:', 16);
    }

    container.innerHTML = "";
    createGrid(counter);
});

//style='width: ${counter}vw; height: ${counter}vw