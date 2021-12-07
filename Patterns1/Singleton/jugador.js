 // crear classe jugador
class jugador {
    constructor(nom) {
      this.nom = nom;
      this.puntuacio = 0;
    }
    UnirJoc(joc) {
      joc.afegirJugador(this);
    }
    DeixarJoc(joc) {
      joc.treureJugador(this);
    }
}
module.exports = jugador;