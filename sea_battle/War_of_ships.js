// Реализовать модель для игры морской бой.
// Модель включает в себя игровое поле, оно же - двумерный массив размером 10 на 10 клеток. 
// Каждый эл-т массива содержит в себе объект, содержащий следующие свойства:
//     opened: false // открыта ли ячейка
//     ship: null // or ship's id
//     message: "" // empty string
//  также будут присутствовать следующие методы
//      - shoot(x,y) // shoot to the cell, set opened into true; if there is a ship inside the cell, then set message to 'Ранил' or 'Убил'
//      - validate // valitades if the coordinates x,y are valid

var SeaBattle = function() {
    var field = [];

    function validate(x, y) {
        // valitades if the coordinates x,y are valid
        return Boolean(field[y] && field[y][x]);
    };

    function Cell() {
        this.opened = false; // открыта ли ячейка
        this.ship = null; // or ship's id
        this.message = ""; // empty string 
    };

    this.getField = function() {
        return field;
    };

    // shoot to the cell, set opened into true; if there is a ship inside the cell, 
    //then set message to 'Ранил' or 'Убил'
    this.shoot = function(x, y) {
        if (validate(x, y)) {
            var cell = field[y][x];
            cell.opened = true;
            if (cell.ship !== null) {
                cell.message = "Убил!";
            } else {
                cell.message = "Мимо!";
            }
            console.log(cell.message);
        }
    };

    this.createField = function() {
        for (var i = 0; i < 10; i++) {
            var row = [];
            field.push(row);
            for (var a = 0; a < 10; a++) {
                row.push(new Cell());
            }
        }
        console.table(field);
    };

    this.setShip = function(x, y, shipId) {
        if (!validate(x, y)) {
            return;
        }
        var offsets = [
            { x: -1, y: 0 },
            { x: -1, y: -1 },
            { x: 0, y: -1 },
            { x: 1, y: 1 },
            { x: 1, y: 0 },
            { x: 1, y: -1 },
            { x: 0, y: 1 },
            { x: -1, y: 1 }
        ];
        for (var i = 0; i < offsets.length; i++) {
            var newX = offsets[i].x + x;
            var newY = offsets[i].y + y;
            if (validate(newX, newY) && field[newY][newX].ship !== null) {
                console.log("Вы не можете поставить корабль здесь.");
                return;
            }
        }
        field[y][x].ship = shipId || x + y;
    };
};

var game = new SeaBattle();
console.log(game);