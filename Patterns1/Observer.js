/*
Nivell 3
Observer
Escriu una aplicació que creï diferents objectes Usuari. 
L'aplicació podrà crear diferents Temes i subscriure els usuaris a ells. 
Quan un Usuari afegeixi un missatge a un Tema s'enviarà una alerta per la consola 
des del Tema. També ho mostraran per consola cadascun dels Usuaris
 que estiguin subscrits al Tema (rebran el missatge).
  Crea un Tema amb un Usuari i un altre 
amb dos i mostra la recepció dels missatges pels usuaris. Utilitza el mòdul events.
*/

var events = require('events');
var eE = new events.EventEmitter();

eE.on('Missatge a Tema', function (missatge, tema, usuari) {
  console.log(usuari + ' escriu missatge: ' + missatge + ' a tema: ' + tema.nom);
});
eE.on('Rep Missatge de Tema', function (missatge, tema, usuari, usuari2) {
  console.log(usuari2 + ' rep missatge: ' + missatge + ' de ' + usuari + ' a tema: ' + tema);
})

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


// crear temes i usuaris
let tema1 = new tema('MyFirstTheme');
let tema2 = new tema('MockTema');
let usuari1 = new usuari('MyFirstUser');
let usuari2 = new usuari('MockUser');
//afegir subscriptors a tema
tema1.afegirSubscriptor(usuari1);
tema2.afegirSubscriptor(usuari1);
tema1.afegirSubscriptor(usuari2);
//enviar missatges
usuari2.escriureMissatgeTema('MockMessage', tema1);
usuari1.escriureMissatgeTema('MockMessage', tema2);
usuari2.escriureMissatgeTema('MockMessage', tema2);