// Modulo FS File System
// Consiglio altamente di guardare i file che iniziano con 4_
// Metodo sincrono
// Qui viene eseguito il codice a blocco e fino a quando non finisce non viene eseguito altro codice

const { readFileSync, writeFileSync } = require("fs");

// read e write hanno bisogno del path ma anche della codifica per gestire i caratteri
const prova = readFileSync("./4_cartella/prova.txt", "utf-8");
const ciao = writeFileSync("./4_cartella/ciao.txt", "utf-8");

//writeFileSync("./4_cartella/prova.txt", "Ciaoo"); // Così sovrascrivo il file
writeFileSync("./4_cartella/prova.txt", " Ciaoo questo è con l'append", { flag: 'a' }); // Così scrivo sul file

writeFileSync("./4_cartella/fileNonEsistente.txt", "Questo file è stato creato con NodeJS"); // Se il file dovesse mancare, NodeJS lo creerà



// Metodo asincrono
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