var rand = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var FirstArr = [];
for (var i = 0; i < 10; i++) {
    FirstArr[i] = [];
    for (var a = 0; a < 10; a++) {
        FirstArr[i][a] = rand(5, 99);
    }
}
console.log(FirstArr);

var SecondArr = [];
for (var i = 0; i < FirstArr.length; i++) {
    SecondArr[i] = [];
    for (var a = 0; a < FirstArr.length; a++) {
        SecondArr[i][a] = FirstArr[FirstArr.length - 1 - i][FirstArr.length - 1 - a];
    }
}
console.log(SecondArr);
// дз1
// Пройти двумерный массив против часовой стрелки от нижней правой точки

var topArr = [],
    rightArr = [],
    bottomArr = [],
    leftArr = [];

topArr = FirstArr[0].slice().reverse();

bottomArr = FirstArr[FirstArr.length - 1].slice(1, FirstArr[FirstArr.length - 1].length - 1);

for (var i = 1; i < FirstArr.length; i++) {
    leftArr.push(FirstArr[i][0]);
    rightArr.push(FirstArr[i][FirstArr[i].length - 1]);
}
rightArr.reverse();

var perimetr = rightArr.concat(topArr, leftArr, bottomArr);
console.log(perimetr);

// дз2
// получить эл-ты, лежащие на гранях треугольника, образованного верхней стороной, правой стороной и главной диагональю
var triangle = [];
var topSide = FirstArr[0].slice();
var hypot = [];
var rightSide = [];

for (var i = 1; i < FirstArr.length-1; i++) {
    rightSide.push(FirstArr[i][FirstArr[i].length - 1]);
}

for (var i = FirstArr.length-1; i > 0; i--) {
    hypot.push(FirstArr[i][i]);
}


triangle = topSide.concat(rightSide, hypot);
console.log(triangle);

// // дз3 **
// // ПРойти двумерный массив по спирали от верхнего левого угл
var spiral = [];
var y = (0, FirstArr.length-1);
var x = (0, FirstArr[0].length-1);

for (var i = 0; i < FirstArr.length; i++) {

    for (var r = 0; r < 9; r++) {
        spiral.push(FirstArr[r]);
        x[1]--;
    }
    for (var d = x[1]; d < 9; d++) {
        spiral.push(FirstArr[x[1]]);
        //y[1]--;
    }
    for (var l = 9 ; l >= y[0]; l--) {
        spiral.push(FirstArr[l]);
        y[0]++;
    }
    for(var u = x[1]; u > x[0]; u--) {
        spiral.push(FirstArr[x[1]]);
        x[0]++;
    }
}

// дз4
// Отзеркалить части массива, разделенные главной диагональю.

var mirror = [];
for (var i = 0; i < FirstArr.length; i++) {
    for (var a = 0; a < FirstArr.length; a++) {
        if (!mirror[a]) {
            mirror[a] = [];
        }
        mirror[a][i] = FirstArr[i][a];
    }
}
console.log(FirstArr);
console.log(mirror);