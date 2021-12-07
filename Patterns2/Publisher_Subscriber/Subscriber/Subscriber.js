/*
- Subscriber
*/
let CreateRabbitQueue = require('../CreateRabbitQueue.js');

class Subscriber {
  constructor(name) {
    this.name = name;
  }
  async subscribe(exchange) {
    CreateRabbitQueue(exchange).then(val => {
      let q = val.q;
      console.log(` [*] ${this.name} is waiting for messages from ${exchange} in %s. To exit press CTRL+C`, q.queue);
      val.channel.consume(q.queue, (msg) => { console.log(` [*] ${this.name} recieves publication from ${exchange}: `, msg.content.toString()) });
    });
  }
}

module.exports = Subscriber;