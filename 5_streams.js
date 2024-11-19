// Streams
// Consiglio altamente di guardare i file che iniziano con 5_
// Sono dei flussi di dati
const { createReadStream, readFileSync, writeFileSync } = require("fs");

/*
// Qui scrivo 10000 righe
for (let i = 1; i < 10001; i++) {
	writeFileSync("./5_cartella/fileGrande.txt", `Ciao riga ${i}\n`, {
		flag: "a",
	});
}
*/

// Così ottengo il buffer, e mi dirà le dimensioni del file
const fileGrande = readFileSync("./5_cartella/fileGrande.txt");
console.log(fileGrande);

const stream = createReadStream("./5_cartella/fileGrande.txt");
// qui non possiamo scegliere noi il nome, sarà sempre data
stream.on("data", (result) => {
	console.log(result); // Così otteniamo i file in chunk al posto di avere tutto in una volta sola, viene spacchettato si potrebbe dire
});
console.log(fileGrande);
