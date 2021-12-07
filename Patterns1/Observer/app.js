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
let tema = require('./Tema.js');
let usuari = require('./Usuari.js');

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