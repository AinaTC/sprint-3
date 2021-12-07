/*
Nivell 1
Callback Hell
El codi adjunt llegeix un fitxer situat en un directori inbox 
i escriu el seu contingut invertit en un altre fitxer al directori outbox. 
Reestructura i simplifiqui el codi existent per a evitar el denominat Callback Hell.
*/

const { readdir } = require("fs").promises;
const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");
let reverseFile = require('./ReverseFile.js');

// Read and reverse contents of text files in a directory
async function fun(inbox, outbox) {
  try {
    var files = await readdir(inbox);
    files.forEach(async function (file) {
      await reverseFile(join(inbox, file), join(outbox, file)); 
    })
  } catch (err) { console.log("Error: Folder inaccessible"); }
};
fun(inbox, outbox);

