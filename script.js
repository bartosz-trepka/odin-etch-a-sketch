const container = document.getElementById('container');

let appendString = "";
let counter = 16;

for (let i = 0; i < counter; i++) {
    for (let j = 0; j < counter; j++) {
        appendString += '<div class="box"></div>';
    }
}

container.innerHTML = appendString;