/*
Nivell 1
Callback Hell
El codi adjunt llegeix un fitxer situat en un directori inbox 
i escriu el seu contingut invertit en un altre fitxer al directori outbox. 
Reestructura i simplifiqui el codi existent per a evitar el denominat Callback Hell.
*/

const {
  readdir,
  readFile,
  writeFile
} = require("fs").promises;
const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
    .split("")
    .reverse()
    .join("");


// Read and reverse contents of text files in a directory
async function fun(inbox, outbox) {
  try {
    var files = await readdir(inbox);
  } catch (err) { console.log("Error: Folder inaccessible"); }
  if (files) {
    files.forEach(async function (file) {
      try {
        var data = await readFile(join(inbox, file), "utf8");
      } catch (err) { console.log("Error: File error"); }
      try {
        await writeFile(join(outbox, file), reverseText(data));
        console.log(`${file} was successfully saved in the outbox!`);
      } catch (err) { console.log("Error: File could not be saved!"); }
    });
  }
};
fun(inbox, outbox);

