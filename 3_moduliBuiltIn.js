// Moduli built-in
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