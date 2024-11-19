// Event emitters
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
