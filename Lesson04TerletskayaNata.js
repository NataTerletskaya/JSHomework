// Домашка1
console.log("Домашка 1");
console.log("Создать двумерный массив размерностью 10 на 10 элементов, заполнить его случайными числами.");
// Create helper function for generating a random number between min and max.
var rand = function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    // Create helper function for creating an array, filled with the random numbers.
var getArr = function() {
        // Define new empty array.
        var resArr = [];
        // Fill resArray with random numbers.
        for (var i = 0; i < 10; i++) {
            resArr.push(rand(0, 100));
        }
        // Return result.
        return resArr;
    }
    // Define an array to be filled with other arrays as values.
var dimenArr = [];
// Fill dimenArray with the arrays filled with random numbers.
for (var i = 0; i < 10; i++) {
    dimenArr.push(getArr());
}
// Output result.
console.log(dimenArr);

// Домашка 2
// Обойти получившийся массив из конца в начало. (Правый нижний элемент до левого верхнего)
console.log("Домашка 2");
console.log("Обойти получившийся массив из конца в начало. (Правый нижний элемент до левого верхнего)");
// Define array where we will put result of operation.
var resReverseArr = [];
// Reverse the array dimenArr and put the result in new array reverseDimenArr.
var reverseDimenArr = dimenArr.reverse();
// Do reverse of each child array, that kept in array reverseDimenArr, and collect them into resReverseArr.
for (var i = 0; i < reverseDimenArr.length; i++) {
    resReverseArr.push(reverseDimenArr[i].reverse());
}
console.log(resReverseArr);
//************************************
console.log("Домашка 3");
console.log("Получить значения элементов, лежащих на периметре получившегося массива от левого верхнего угла по часовой стрелке. Вывести значения в результирующий массив.");
// Define array where we will put result of operation.
var perimetrArr = [];
// Ask JS to take only the particular arrays.
for (var i = 0; i < resReverseArr.length; i++) {
    // Define an index of main array as currentArr.
    var currentArr = resReverseArr[i];
    // Ask JS to take the whole array with index = 0 and to bind it with empty array perimetrArr.
    if (0 === i) {
        perimetrArr = perimetrArr.concat(currentArr);
    // Ask JS to take the whole array with last index and to bind it with array perimetrArr.
    } else if (resReverseArr.length - 1 === i) {
        perimetrArr = perimetrArr.concat(currentArr.reverse());
    // Ask JS to take the last value of arrays with index from 2 to 8 and to add them to array perimetrArr.
    } else {
        perimetrArr.push(currentArr[currentArr.length - 1]);
    }
}
// Ask JS to take the first value of arrays with index from 8 to 2 and to add them to array perimetrArr.
for (var i = resReverseArr.length - 2; i > 0; i--) {
    perimetrArr.push(resReverseArr[i][0]);
}
console.log(perimetrArr);
