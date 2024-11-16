// Fa parte dei moduli
// Nelle utils mettiamo tutti quei blocchi di codici che andiamo a riutilizzare

function saluta(nome) {
    console.log("Ciao", nome);
}

// Questo serve per esportare il modulo, altrimenti rimane qui e non può essere utilizzato
module.exports = saluta;