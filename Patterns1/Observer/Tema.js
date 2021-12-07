var events = require('events');
var eE = new events.EventEmitter();

eE.on('Missatge a Tema', function (missatge, tema, usuari) {
  console.log(usuari + ' escriu missatge: ' + missatge + ' a tema: ' + tema.nom);
});


class tema {
  constructor(nom) {
    this.nom = nom;
    this.subscriptors = new Array();
    this.missatges = new Array();
  }
  afegirMissatge(missatge) {
    if (this.subscriptors.some(el => el.nomUsuari == missatge.usuari)) {
      this.missatges.push(missatge);
      eE.emit('Missatge a Tema', missatge.text, this, missatge.usuari);
      this.enviarMissatge(missatge);
    } else {
      console.log(`cal estar subscrit a ${this.nom} per escriure-hi missatges`);
    };
  }
  enviarMissatge(missatge) {
    this.subscriptors.forEach(subscriptor => {
      var tema = this.nom;
      if (subscriptor.nomUsuari !== missatge.usuari) {
        subscriptor.rebreMissatge(missatge.text, tema, missatge.usuari, subscriptor.nomUsuari);
      }
    });
  }
  afegirSubscriptor(username) {
    this.subscriptors.push(username);
  }
}

module.exports = tema;