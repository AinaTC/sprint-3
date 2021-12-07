let decorator = require("./Decorator");

class convertor {
    @decorator
    ConvertToEuros(amount, currency) { }
}

module.exports = convertor;