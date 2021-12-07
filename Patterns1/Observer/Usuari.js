var events = require('events');
var eE = new events.EventEmitter();
eE.on('Rep Missatge de Tema', function (missatge, tema, usuari, usuari2) {
  console.log(usuari2 + ' rep missatge: ' + missatge + ' de ' + usuari + ' a tema: ' + tema);
})

class usuari {
  constructor(nom) {
    this.nomUsuari = nom;
  }
  escriureMissatgeTema(missatge, tema) {
    tema.afegirMissatge({ usuari: this.nomUsuari, text: missatge });
  };

  rebreMissatge(missatge, tema, usuari) {
    var usuari2 = this.nomUsuari
    eE.emit('Rep Missatge de Tema', missatge, tema, usuari, usuari2)
  };
};

module.exports = usuari;