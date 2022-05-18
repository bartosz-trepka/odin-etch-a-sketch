const container = document.getElementById('container');
const gridList = container.getElementsByTagName('div');

let appendString = "";
let counter = 16;

for (let i = 0; i < counter; i++) {
    for (let j = 0; j < counter; j++) {
        appendString += '<div class="box"></div>';
    }
}
container.innerHTML = appendString;

for (let i = 0; i < gridList.length; i++) {
    gridList[i].addEventListener('mouseenter', () => {
        gridList[i].classList += ' hovered';
    });
}