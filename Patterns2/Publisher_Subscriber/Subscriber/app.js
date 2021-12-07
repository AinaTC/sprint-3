let Subscriptor = require('./Subscriber.js');

S = new Subscriptor('Bas');
S2 = new Subscriptor('Rens');
S.subscribe('Aina');
S2.subscribe('Aina');
S2.subscribe('Bas');
