const PX = 'px';
const SPEED = 1;
const directions = ['up', 'down', 'left', 'right'];
const directionsActions = { 'up': up, 'down': down, 'left': left, 'right': right };
const table = createTable(10);
const config = getInitialValues(table);
let timerId;

positionTable(table);
table.addEventListener('dblclick', run);
document.addEventListener('click', stop);


function createTable(size) {
    const table = document.createElement('table');
    for (let i = 0; i < size; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < size; j++) {
            const td = document.createElement('td');
            td.textContent = rand(1, 99);
            td.style.borderRadius = '50%';
            let colorSet = randColor();
            td.style.backgroundColor = `rgb(${colorSet})`;
            td.style.color = `rgb(${inverseColor(colorSet)})`;
            td.style.fontSize = '28px';
            td.style.width = '28px';
            td.style.height = '28px';
            td.style.textAlign = 'center';
            td.style.padding = '10px';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    table.style.position = 'absolute';
    document.body.appendChild(table);
    return table;
};

function inverseColor(colorData) {
    return colorData.map(item => 255 - item);
};

function randColor() {
    let r = rand(0, 255),
        g = rand(0, 255),
        b = rand(0, 255);
    return [r, g, b];
};

//get initial position of each cell
function getInitialValues(table) {
    const config = [];
    const cells = table.querySelectorAll('td');
    for (var i = 0; i < cells.length; i++) {
        const top = cells[i].offsetTop;
        const left = cells[i].offsetLeft;
        config.push({
            top,
            left,
            cell: cells[i],
            direction: directions[rand(0, 3)]
        });
    }
    return config;
};

// set position of table
function positionTable(table) {
    table.style.position = 'absolute';
    table.style.top = (window.innerHeight - table.clientHeight) / 2 + PX;
    table.style.left = (window.innerWidth - table.clientWidth) / 2 + PX;

    config.forEach(({ top, left, cell }) => {
        cell.style.position = 'absolute';
        cell.style.top = top + PX;
        cell.style.left = left + PX;
    });
};

function up(cell) {
    cell.style.top = parseInt(cell.style.top) - SPEED + PX;
};

function down(cell) {
    cell.style.top = parseInt(cell.style.top) + SPEED + PX;
};

function left(cell) {
    cell.style.left = parseInt(cell.style.left) - SPEED + PX;
};

function right(cell) {
    cell.style.left = parseInt(cell.style.left) + SPEED + PX;
};

function canMove(cell) {
    return cell.offsetTop + table.offsetTop > 0 &&
        cell.offsetTop + 48 + table.offsetTop < window.innerHeight &&
        cell.offsetLeft + table.offsetLeft > 0 &&
        cell.offsetLeft + 48 + table.offsetLeft < window.innerWidth;
}

function animate() {
    config.forEach(({ cell, direction }) => {
        if (canMove(cell)) {
            directionsActions[direction](cell);
        }
    });
};

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


function run() {
    timerId = setInterval(animate, 50);
    return false;
}

function stop() {
    clearInterval(timerId);
}