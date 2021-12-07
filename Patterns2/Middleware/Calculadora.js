
class Calculadora {
    constructor() {
    }
    suma(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i].num;
        }
        return (sum)
    }
    resta(numbers) {
        let rest = numbers[0].num;
        for (let i = 0; i < (numbers.length - 1); i++) {
            rest -= numbers[i + 1].num;
        }
        return (rest);
    }
    multiplica(numbers) {
        let mult = 1;
        for (let i = 0; i < numbers.length; i++) {
            mult *= numbers[i].num;
        }
        return (mult);
    }
}
module.exports = Calculadora;