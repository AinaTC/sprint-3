/*
Middleware
Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui 
rebent els paràmetres en un JSON
*/
const Calculadora = require('./Calculadora');
let JsonCalc = new Calculadora();
const Middleware = require("./Middleware");
const app = new Middleware(JsonCalc);

/*
Insereix a la invocació middlewares que facin el quadrat, 
el cub i la divisió entre 2 dels operands incials en cadascuna de les operacions. 
*/
app.use((req, next) => {
    number = req[0].num;
    console.log(`cub de ${number}: ` + number * number * number);
    console.log(`quadrat de ${number}: ` + number * number);
    next();
});

app.use((req, next) => {
    number = req[1].num;
    console.log(`cub de ${number}: ` + number * number * number);
    console.log(`quadrat de ${number}: ` + number * number);
    next();
});

app.use((req, next) => {
    number1 = req[0].num;
    number2 = req[1].num;
    console.log(`divisio entre ${number1} i ${number2}: ` + number1 / number2);
    next();
});

/*
Invoca les execucions de la suma, la resta i la multiplicació, 
de manera que es vagin mostrant per la consola les modificacions que es van fent als valors 
abans del resultat final.
*/

numbers = require('./numbers.json');

console.log('resultat suma: ' + app.suma(numbers));
console.log('resultat resta: ' + app.resta(numbers));
console.log('resultat multiplicacio: ' + app.multiplica(numbers));
