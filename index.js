// Esattamente JavaScript
// const numero = 3;

// if (numero < 3) {
//     console.log("Il numero è < di 3")
// } else {
//     console.log("Il numero non è < di 3");
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Oggetti globali
/* Inizio esempio oggetti globali

// Per eseguirlo dal terminale CTRL+ò, basta scrivere "node index.js"
console.log("Dirname: ", __dirname); // Restituisce la directory senza il nome del file
console.log("Filename: ", __filename); // Restituice la directory e il nome del file
console.log("Process: ", process); // Ci permette di capire se stiamo lavorando in locale oppure in un server

Fine esempio oggetti globali*/
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Moduli
/* Inizio esempio Moduli
// Consiglio altamente di guardare i file 2_nomi.js e 2_utils.js altrimenti è impossibile da capire il concetto
// I moduli sono altri file javascript, file incapsulati si potrebbero definire o anche pacchetti
// Esistono interni, built-in e esterni. Interni creati da noi, Built-in quelli che abbiamo appena installiamo NodeJS, e Esterni quelli che scarichiamo da internet con npm.

// Messi in nomi.hs, ma rimangono anche qui come esempio
// const persona1 = "Luca";
// const persona2 = "Paolo";

// Messa nelle utils, ma rimane qua come esempio
// function saluta(nome) {
//     console.log("Ciao", nome);
// // }

// saluta(persona1);
// saluta(persona2);

const saluta = require("./2_utils");
nomi = require("./2_nomi")
console.log(nomi)
console.log("Preso da nomi.js", nomi.persona1)
console.log("Preso da nomi.js", nomi.persona2)

saluta("Luca, sei stato salutato senza far parte di nomi.js")

Fine esempio moduli */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Moduli built-in
/* Inizio esempio moduli built-in
// Consiglio altamente di guardare i file che iniziano con 3_
const os = require("os"); // non serve indicare nessun path perché sono built-in
console.log(os.userInfo()); // Info sull'utente
console.log(os.uptime()); // Quanto tempo il PC è rimasto acceso
console.log(os.version()); // Versione del sistema operativo
console.log(os.arch()); // Architettura del sistema operativo


const path = require("path"); // Percorso relativo
console.log(path.sep) // Separatore standard del sistema operativo, esempio \ /

const percorsoFile = path.join('/3_cartella', 'sottocartella', '3_prova.txt'); // Serve a unire path separati
console.log("Il percorso relativo del file è: ", percorsoFile);

console.log("Il nome del file è: ", path.basename(percorsoFile)); // Darà l'ultimo valore, ovvero 3_prova.txt

const percorsoAssoluto = path.resolve(__dirname, '3_cartella', 'sottocartella', '3_prova.txt'); // Senza i valori dopo __dirname non otterremmo tutto ciò del 3_prova.txt
// Importante rimuovere il "/"" da /3_cartella, perché non è più un percorso relativo
console.log("Il percorso assoluto è: ", percorsoAssoluto)

Fine esempio moduli built-in */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Modulo FS File System
// Consiglio altamente di guardare i file che iniziano con 4_
// Metodo sincrono
// Qui viene eseguito il codice a blocco e fino a quando non finisce non viene eseguito altro codice
/* Inizio esempio FS File System sincrono
const { readFileSync, writeFileSync } = require("fs");

// read e write hanno bisogno del path ma anche della codifica per gestire i caratteri
const prova = readFileSync("./4_cartella/4_prova.txt", "utf-8");
const ciao = writeFileSync("./4_cartella/4_ciao.txt", "utf-8");

//writeFileSync("./4_cartella/prova.txt", "Ciaoo"); // Così sovrascrivo il file
writeFileSync("./4_cartella/4_prova.txt", " Ciaoo questo è con l'append", { flag: 'a' }); // Così scrivo sul file

writeFileSync("./4_cartella/4_fileNonEsistente.txt", "Questo file è stato creato con NodeJS"); // Se il file dovesse mancare, NodeJS lo creerà
Fine esempio FS File System sincrono*/

// Metodo asincrono
/* Inizio esempio FS File System asincrono
const { readFile, writeFile } = require("fs");
// Aggiungiamo al codice di prima la callback
// Il funzionamento è diverso, qui abbiamo l'esecuzione del codice e quando poi finirà mi andrà in console log, non bloccherà l'esecuzione di altro codice
readFile("./4_cartella/prova.txt", "utf-8", (error, result) => {
    if (error) {
        console.log(error);
        return
    } else
        console.log(result);
})

Fine esempio FS File System asincrono */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/*
let c = 4;
while (c != 0 && c != 1) {
    c = Math.floor(Math.random() * 2);
}
console.log(c);
*/
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Moduli HTTP
/* Inizio esempio Moduli HTTP
// Servono per creare dei web server
const http = require("http");
const server = http.createServer((req, res) => { // request e response
    // res.write("Benvenuto"); sostituito dal req url === "/"

    // Routing
    if (req.url === "/") {
        res.end("benvenuto col routing");
    }
    else if (req.url === "/luca") {
        res.end("Il profilo di Luca col routing");
    }

    else {
        res.end("<h1>Errore</h1>");
    }
})
server.listen(3000);
// http://localhost:3000/ e avremo in pagina il contenuto del write, per chiudere il server basta fare CTRL+C sul terminale
Fine esempio Moduli HTTP */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Nodemon
// npm init così creiamo il nostro pacchetto
// Rimane sempre in ascolto per eventuali cambiamenti al codice e non dobbiamo fare nodejs nomefile
// npm i nodemon --save-dev
// Ovviamente bisogna avere npm installato
/* Poi si va su package.json e su test bisogna mettere 
  "scripts": {
    "start": "nodemon index.js"
  }
*/
// Adesso npm start nel terminale
// Adesso quando si salva, si riesegue il codice in automatico
// const prova = 4;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Event emitters
/* Inizio esempio event emitters
const EventEmitter = require("events");
const customEmitter = new EventEmitter();
// con on ci iscriviamo a questo evento, lo registriamo praticamente
customEmitter.on("messaggio", (nome, anno) => {
	console.log(`Sono partito ${nome}, e siamo nell'anno ${anno}`);
});
// Passo solo nome
customEmitter.on("messaggio", (nome) => {
	console.log(`Sono partito ${nome}`);
});
// Passo nome e anno, anche se nome non lo uso
customEmitter.on("messaggio", (nome, anno) => {
	console.log(`Siamo nell'anno ${anno}`);
});

// il nome deve essere uguale dentro .emit()
// l'emit deve essere sempre dopo l'on
customEmitter.emit("messaggio", "Luca", "2024");
Fine esempio event emitters */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Streams
/* Inizio esempio streams
// Sono dei flussi di dati
// Consiglio altamente di guardare i file che iniziano con 5_
const { createReadStream, readFileSync, writeFileSync } = require("fs");

// Qui scrivo 10000 righe
// for (let i = 1; i < 10001; i++) {
// 	writeFileSync("./5_cartella/fileGrande.txt", `Ciao riga ${i}\n`, {
// 		flag: "a",
// 	});
// }

// Così ottengo il buffer, e mi dirà le dimensioni del file
const fileGrande = readFileSync("./5_cartella/fileGrande.txt");
console.log(fileGrande);

const stream = createReadStream("./5_cartella/fileGrande.txt");
// qui non possiamo scegliere noi il nome, sarà sempre data
stream.on("data", (result) => {
	console.log(result); // Così otteniamo i file in chunk al posto di avere tutto in una volta sola, viene spacchettato si potrebbe dire
});
console.log(fileGrande);
Fine esempio streams */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Introduzione a Express
/* Inizio esempio introduzione a Express
// npm i express

// Questo codice è preso dalla documentazione: https://www.npmjs.com/package/express
const express = require("express");
const app = express();

// app.get("/", function (req, res) {
// 	res.send("Hello World, introduzione a Express");
// });

app.get("/", (req, res) => {
	res.send(
		"<h1>Hello World, introduzione a Express</h1> <a href ='/'>Vai alla home</a> <a href='/about'>Vai all'about</a> <a href='/contacts'>Vai ai contatti</a> <a href='/nonesiste'>Vai a una pagina che non esiste</a>"
	);
});

app.get("/about", (req, res) => {
	res.send(
		"<h1>Schermata delle informazioni</h1> <a href ='/'>Vai alla home</a> <a href='/about'>Vai all'about</a> <a href='/contacts'>Vai ai contatti</a> <a href='/nonesiste'>Vai a una pagina che non esiste</a>"
	);
});

app.get("/contacts", (req, res) => {
	res.send(
		"<h1>Schermata contatti</h1> <a href ='/'>Vai alla home</a> <a href='/about'>Vai all'about</a> <a href='/contacts'>Vai ai contatti</a> <a href='/nonesiste'>Vai a una pagina che non esiste</a>"
	);
});

// qualsiasi cosa che non è stata gestita sopra, avrà questo
app.all("*", (req, res) => {
	res.send(
		"<h1>Errore 404, fatto a mano</h1> <a href ='/'>Vai alla home</a> <a href='/about'>Vai all'about</a> <a href='/contacts'>Vai ai contatti</a> <a href='/nonesiste'>Vai a una pagina che non esiste</a>"
	);
});

app.listen(3000);

fine esempio introduzione a Express */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Aggiungere file statici
// creare cartella public
/* Inizio esempio aggiungere file statici
const express = require("express");
const app = express();
app.use(express.static("public"));

// app.get("/", function (req, res) {
// 	res.send("Hello World, introduzione a Express");
// });

app.get("/", (req, res) => {
	res.sendFile("home.html", { root: __dirname + "/public" });
});

app.get("/about", (req, res) => {
	res.sendFile("about.html", { root: __dirname + "/public" });
});

app.get("/contacts", (req, res) => {
	res.sendFile("contacts.html", { root: __dirname + "/public" });
});

// qualsiasi cosa che non è stata gestita sopra, avrà questo
app.all("*", (req, res) => {
	res.sendFile("404.html", { root: __dirname + "/public" });
});

app.listen(3000);
Fine esempio esempio aggiungere file statici*/
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Usare i JSON
// La cartella 6_cartella è richiesta
//  - API: Interfaccia per comunicare con il DB (json, res.json)
//  - SSR: Server Side Rendering (template, ejs, res.render)
// npm i ejs
/* Inizio esempio usare i JSON

const express = require("express");
const app = express();

// Qui si fa manualmente in pagina
// app.get("/", (req, res) => {
// 	res.json([
// 		{ nome: "Luca", cognome: "Privitera" },
// 		{ nome: "Anna", cognome: "Rossi" },
// 	]);
// });

// Qui si prende da un altro file
const { persone } = require("./6_cartella/6_persone");
app.get("/", (req, res) => {
	res.json(persone);
});

app.listen(3000);

Fine esempio usare i JSON */
