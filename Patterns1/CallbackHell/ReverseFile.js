const {
    readFile,
    writeFile
  } = require("fs").promises;

const reverseText = str =>
  str
    .split("")
    .reverse()
    .join("");

// Read and reverse contents of a text file
async function reverseFile(infile,outfile){
  try {
    var data = await readFile(infile, "utf8");
  } catch (err) { console.log("Error: File error"); }
  try {
    await writeFile(outfile, reverseText(data));
    console.log(`${outfile.split("\\").pop().split("/").pop()} was successfully saved in the outbox!`);
  } catch (err) { console.log("Error: File could not be saved!"); }
}

module.exports = reverseFile;