function createGrid(counter) {
    for (let i = 0; i < counter; i++) {
        for (let j = 0; j < counter; j++) {
            appendString += `<div class='box hover100'style='width: ${100/counter}%'></div>`;
        }
    }
    container.innerHTML = appendString;
    appendString = "";

    addHover();
}

function addHover() {
    for (let i = 0; i < gridList.length; i++) {
        gridList[i].addEventListener('mouseenter', () => {
            switch(gridList[i].classList[1]) {
                case 'hover100':
                    gridList[i].classList.toggle('hover100');
                    gridList[i].classList.toggle('hover90');
                    break;
                case 'hover90':
                    gridList[i].classList.toggle('hover90');
                    gridList[i].classList.toggle('hover80');
                    break;
                case 'hover80':
                    gridList[i].classList.toggle('hover80');
                    gridList[i].classList.toggle('hover70');
                    break;
                case 'hover70':
                    gridList[i].classList.toggle('hover70');
                    gridList[i].classList.toggle('hover60');
                    break;
                case 'hover60':
                    gridList[i].classList.toggle('hover60');
                    gridList[i].classList.toggle('hover50');
                    break;
                case 'hover50':
                    gridList[i].classList.toggle('hover50');
                    gridList[i].classList.toggle('hover40');
                    break;
                case 'hover40':
                    gridList[i].classList.toggle('hover40');
                    gridList[i].classList.toggle('hover30');
                    break;
                case 'hover30':
                    gridList[i].classList.toggle('hover30');
                    gridList[i].classList.toggle('hover20');
                    break;
                case 'hover20':
                    gridList[i].classList.toggle('hover20');
                    gridList[i].classList.toggle('hover10');
                    break;
                case 'hover10':
                    gridList[i].classList.toggle('hover10');
                    gridList[i].classList.toggle('hover0');
                    break;
            }
        });
    }
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