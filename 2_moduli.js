// Moduli
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

// Esegui con "2_moduli.js".