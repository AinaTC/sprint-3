// crear marcador singleton
class SingletonMarcador {
    constructor(jugadors) {
      if (!!SingletonMarcador.instance) {
        return SingletonMarcador.instance;
      }
      SingletonMarcador.instance = this;
      this.jugadors = jugadors;
      return this;
    }
    RestableixPuntuacions() {
      for (let i = 0; i < this.jugadors.length; i++) {
        this.jugadors[i].puntuacio = 0;
      }
    }
    MostraMarcador() {
      var pl = this.jugadors;
      console.log(pl);
      let max_puntuacio = Math.max.apply(Math, pl.map(function (o) { return o.puntuacio; }));
      var guanyador = pl.filter(o => o.puntuacio === max_puntuacio);
      console.log('el guanyador és: ' + guanyador.map(el => el.nom));
    }
    treureJugador(jugador) {
      this.jugadors = this.jugadors.filter(el => el !== jugador);
    }
  };
module.exports = SingletonMarcador;