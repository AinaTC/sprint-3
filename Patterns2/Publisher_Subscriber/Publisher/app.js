/*
Publisher - Subscriber
Utilitzant RabbitMQ com a element imprescindible crea una queue on una classe 
Publisher publiqui missatges que siguin llegits per una classe Subscriber. 
Mostra l'emissió i recepció de cada missatge en consoles diferents.
*/
let Publisher = require('./Publisher.js');
let CreateRabbitQueue = require('../CreateRabbitQueue.js');
let exchange = 'Aina';

CreateRabbitQueue(exchange).then(val => {
    let channel = val.channel;
    P = new Publisher(exchange, channel);
    P.publish('My First publication', val.connection);
    P.publish('My Best publication', val.connection);
})

let exchange2 = 'Bas';
CreateRabbitQueue(exchange2).then(val => {
    let channel = val.channel;
    P = new Publisher(exchange2, channel);
    P.publish('I Can  publish too', val.connection);
});
