function createGrid(counter) {
    for (let i = 0; i < counter; i++) {
        for (let j = 0; j < counter; j++) {
            appendString += `<div class='box'style='width: ${100/counter}%'></div>`;
        }
    }
    container.innerHTML = appendString;
    appendString = "";

    addHover();
}

function addHover() {
    for (let i = 0; i < gridList.length; i++) {
        gridList[i].addEventListener('mouseenter', () => {
            getRandomRGB();
            gridList[i].style.backgroundColor = randomRGB;
        });
    }
}

function getRandomRGB() {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    randomRGB = `rgb(${red}, ${green}, ${blue})`;
}

const container = document.getElementById('container');
const gridList = container.getElementsByTagName('div');
const newGridButton = document.getElementById('new-grid');

let appendString = "", counter = 16, randomRGB = "";

createGrid(counter);

newGridButton.addEventListener('click', () => {
    counter = prompt('Insert new grid size:', parseInt(16));

    while (counter > 100 || counter < 1 || isNaN(counter)) {
        counter = prompt('Insert new grid size:', 16);
    }

    container.innerHTML = "";
    createGrid(counter);
});