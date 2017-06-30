
var arr = ["Na", "Ta", "Li", "Ya", "Pavl", "Ter", "Le", "Ts", "Ka", "Ya"];

console.log("Initial array:\n", arr, "\n");

// 1.Используя ТОЛЬКО цикл for, написать скрипт, который выведет значения произвольного массива 
// (скажем, длиной в 10 элементов) по возрастанию индекса массива (т.е. слева направо)
console.log("Используя ТОЛЬКО цикл for, написать скрипт, который выведет значения произвольного массива \n(скажем, длиной в 10 элементов) по возрастанию индекса массива (т.е. слева направо)");

for (i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

// 2.часть вторая: и наоборот (справа налево)
console.log("\nчасть вторая: и наоборот (справа налево)");

var arr = ["Na", "Ta", "Li", "Ya", "Pavl", "Ter", "Le", "Ts", "Ka", "Ya"];
for (i = arr.length-1; i >= 0; i--){
   console.log(arr[i]);
}

// 3.Написать скрипт, который заполнит пустой массив случайными числами (от 0 до 100), используя ф-цию rand
// P.S:размер массива - 30 элементов
var ranArr = [];
var min = 0, max = 100;
var rand = function(min, max){
   return Math.floor(Math.random() * (max - min)) + min;
}
for (var i = 0; i < 30; i++){
    ranArr[i] = rand(min, max);
}
console.log("Array with Random nubers" + "\n" + ranArr)

// 4.Написать скрипт, который будет искать в произвольном массиве какое-то число, 
//например число 7. Если число будет найдено, скрипт должен вывести индекс этого числа.
var numberArr = [152, 56, 78, 7, 12, 7, 96, 85, 12];
for (i = 0; i < numberArr.length; i++) {
    if (numberArr[i] == 7) {
        console.log("Index of 7 is: " + i);
    };
}

// 5.Написать скрипт, который найдет все элементы в массиве, которые делятся на 2 и выведет их индексы.
var numberArr = [152, 56, 78, 7, 12, 7, 96, 85, 12];
for (i = 0; i < numberArr.length; i++) {
    if (numberArr[i] % 2 == 0) {
        console.log("Index of Even Number: " + i);
    }
}

