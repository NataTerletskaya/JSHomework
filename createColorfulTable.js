function createTable(size) {
    const table = document.createElement('table');
    for (let i = 0; i < size; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < size; j++) {
            const td = document.createElement('td');
            td.textContent = rand(1, 100);
            td.style.borderRadius = '50%';

            let colorSet = randColor();
            td.style.backgroundColor = `rgb(${colorSet})`;
            td.style.color = `rgb(${inverseColor(colorSet)})`;

            td.style.fontSize = '28px';
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
}

function randColor() {
    let r = rand(0, 255),
        g = rand(0, 255),
        b = rand(0, 255);
    return [r, g, b];
};

function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

let t = createTable(10);

let h = window.innerHeight / 2;
let w = window.innerWidth / 2;
t.style.top = (h - t.clientHeight / 2) + 'px';
t.style.left = (w - t.clientWidth / 2) + 'px';