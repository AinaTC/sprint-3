/*
Crea una petita aplicació que calculi el cost d'uns quants Articles en euros
a partir de les seves divises incials, aplicant diferents conversions que usin
el Decorator del punt anterior
*/
let convertor = require('./convertor.js');
let article = require('./article.js');

let c = new convertor();
let article1 = new article('article1', 50000, 'JPY');
let article2 = new article('article2', 99.99, 'GBP');
let article3 = new article('article3', 10.5, 'GSP');

let priceEuroArticle1 = c.ConvertToEuros(article1.preu, article1.divisa);
console.log(priceEuroArticle1);
c.ConvertToEuros(article2.preu, article2.divisa);
console.log(c.preuEuros); // la classe convertor guarda l'ultim valor que s'ha fet la conversió
c.ConvertToEuros(article3.preu, article3.divisa); // intenta fer conversió d'una divisa que no es troba en el doc amb conversions.

