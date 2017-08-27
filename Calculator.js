class Calculator {
    setNumbers(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw TypeError('Both arguments must be numbers.');
        }
        this.Number1 = a;
        this.Number2 = b;
    };
    sum() {
        return this.Number1 + this.Number2;
    };
    mul() {
        return this.Number1 * this.Number2;
    };
    minus() {
        return this.Number1 - this.Number2;
    };
    division() {
        return this.Number1 / this.Number2;
    };
    // возвращает первые 10 знаков числа Пи
    static getPI() {
        return +[].slice.apply('' + Math.PI, [0, 12]).join('');
    };
};

class EngineerCalculator extends Calculator {
    squareRoot() {
        return Math.sqrt(this.Number1);
    };
    pow() {
        return Math.pow(this.Number1, this.Number2);
    };

}
let result;
const calc = new Calculator();
const encalc = new EngineerCalculator();
encalc.setNumbers(2, 5)
result = encalc.sum()
console.log('Result: ', result)
result = encalc.mul()
console.log('Result: ', result)
result = encalc.minus()
console.log('Result: ', result)
result = encalc.pow()
console.log('Result: ', result)
result = encalc.squareRoot()
console.log('Result: ', result)
console.log('PI ', Calculator.getPI());