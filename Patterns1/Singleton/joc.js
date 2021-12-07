//crear classe joc
let SingletonMarcador = require('./Singleton.js');
class joc {
    constructor() {
      this.LlistaJugadors = new Array();
      this.marcador = new SingletonMarcador(this.LlistaJugadors);
    }
    afegirJugador(JugadorNou) {
      this.LlistaJugadors.push(JugadorNou);
    };
    Jugar() {
      let len = this.LlistaJugadors.length;
      for (let i = 0; i < len; i++) {
        let punts = Math.floor(Math.random() * 20) - 10;
        this.LlistaJugadors[i].puntuacio += punts;
      }
    };
    treureJugador(jugador) {
      this.LlistaJugadors = this.LlistaJugadors.filter(el => el !== jugador);
      this.marcador.treureJugador(jugador)
    };
    Marcador() {
      this.marcador.MostraMarcador();
    }
    NovaPartida() {
      this.marcador.RestableixPuntuacions();
    }
  }
  
module.exports = joc;