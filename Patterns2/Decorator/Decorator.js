/*
Decorator
Crea un Decorator en un arxiu que retorni una funció. 
Aquesta funció efectuarà una conversió de moneda a euros multiplicant pel 
coeficient de conversió del fitxer adjunt currency_conversions.json 
en funció de la divisa original
*/

const ToEuros = (target, name, descriptor) => {
  const original = descriptor.value;  // hold onto the original function
  if (typeof original === 'function') {  //ensure that it is a function
    // substitute a new function for the original, this is what will be called instead
    descriptor.value = function (...args) {
      let conversions = require('./currency_conversions.json');
      let n = args[1] + '_EUR';
      if (!conversions[args[1] + '_EUR']) {
        console.log(`${args[1]} is not a valid currency`);
      } else {
        target.preuEuros = args[0] * conversions[n];
        return args[0] * conversions[n];
      }
    }
  }
}

module.exports = ToEuros;

