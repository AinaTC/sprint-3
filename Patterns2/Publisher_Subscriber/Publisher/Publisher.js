/*
- Publisher
*/
class Publisher {
  constructor(name, channel) {
    this.name = name;
    this.channel = channel;
  }
  publish(msg, connection) {
    this.channel.publish(this.name, '', Buffer.from(msg)); //publish message
    console.log(` [x] ${this.name} Sent %s`, msg); //show in console
    setTimeout(function () {
      connection.close(); //close the connection
      process.exit(0);
    }, 500);
  }
}

module.exports = Publisher;