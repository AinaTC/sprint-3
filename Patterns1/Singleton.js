
/*
Nivell 2
Singleton
Construeix una aplicació que creï diversos Jugadors. 
Els jugadors podran ser afegits a un Joc, que mostrarà un marcador 
amb les puntuacions i el guanyador. L'aplicació ha de poder afegir o treure 
punts a cada jugador perquè el marcador canviï. 
La classe Marcador ha d'implementar un patró Singleton com a requisit indispensable.
*/
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
  
  
//crear classe joc
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
  
  //crear jugadors i fer que juguin jocs
  let jugador1 = new jugador('j1');
  let jugador2 = new jugador('j2');
  let jugador3 = new jugador('j3');
  
  let MyGame = new joc();
  jugador1.UnirJoc(MyGame);
  jugador2.UnirJoc(MyGame);
  
  console.log('Estat inicial del marcador');
  MyGame.Marcador();

  console.log('Primera ronda');
  MyGame.Jugar();
  MyGame.Marcador();
  jugador3.UnirJoc(MyGame);
  
  console.log('Segona ronda');
  MyGame.Jugar();
  MyGame.Marcador();
  jugador1.DeixarJoc(MyGame);
  
  console.log(`una altra ronda, ara sense ${jugador1.nom}`);
  MyGame.Jugar();
  MyGame.Marcador();
  
  console.log('Començant nova partida');
  MyGame.NovaPartida();
  MyGame.Marcador();
  console.log('partida ronda de la nova partida');
  MyGame.Jugar();
  MyGame.Marcador();
  