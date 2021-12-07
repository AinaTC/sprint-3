var amqp = require('amqplib');

async function CreateRabbitQueue(exchange){
    var connection = await amqp.connect('amqp://localhost');
    var channel = await connection.createChannel();
    await channel.assertExchange(exchange, 'fanout', {durable: false});
    const q = await channel.assertQueue('', {exclusive: false});
    await channel.bindQueue(q.queue, exchange, '');
   return {channel,q, connection};
}
module.exports = CreateRabbitQueue;