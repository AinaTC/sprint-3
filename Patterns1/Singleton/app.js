/*
Nivell 2
Singleton
Construeix una aplicació que creï diversos Jugadors. 
Els jugadors podran ser afegits a un Joc, que mostrarà un marcador 
amb les puntuacions i el guanyador. L'aplicació ha de poder afegir o treure 
punts a cada jugador perquè el marcador canviï. 
La classe Marcador ha d'implementar un patró Singleton com a requisit indispensable.
*/
let jugador = require('./jugador.js');
let joc = require('./joc.js');

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