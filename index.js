// Esattamente JavaScript
// const numero = 3;

// if (numero < 3) {
//     console.log("Il numero è < di 3")
// } else {
//     console.log("Il numero non è < di 3");
// }










// Oggetti globali
/* Inizio esempio oggetti globali

// Per eseguirlo dal terminale CTRL+ò, basta scrivere "node index.js"
console.log("Dirname: ", __dirname); // Restituisce la directory senza il nome del file
console.log("Filename: ", __filename); // Restituice la directory e il nome del file
console.log("Process: ", process); // Ci permette di capire se stiamo lavorando in locale oppure in un server

Fine esempio oggetti globali*/










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