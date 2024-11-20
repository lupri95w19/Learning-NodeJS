// Route Param
const express = require("express");
const path = require("path");
const app = express();

// Qui si prende da un altro file
const { persone } = require("./7_cartella/7_persone");

app.get("/", (req, res) => {
	res.send("<h1>Homepage</h1> <a href='./persone'>Vai a persone</a>");
});

app.get("/persone", (req, res) => {
	const NuovePersone = persone.map((persona) => {
		const { nome, cognome, eta } = persona;
		// Adesso sparirà l'età
		return { nome, cognome };
	});

	// res.sendFile("7_persone.js", { root: path.join(__dirname, "7_cartella") });
	res.json(NuovePersone);
});

// Manuale
/*
app.get("/persone/1", (req, res) => {
	const persona = persone.find((persona) => {
		persona.id === 1;
		res.json(persona);
	});
});
*/

// Automatico
app.get("/persone/:id", (req, res) => {
	console.log(req.params);
	// Perché ha lo stesso nome posso fare così
	const { id } = req.params;
	// Oppure quando il nome è diverso
	// const id = req.params.id;

	const persona = persone.find((persona) => {
		return persona.id === parseInt(id);
	});

	if (!persona) {
		// return res.status(404).send("Prodotto non trovato");
		return res.status(404).json({ messaggio: "Non trovato", error: "404" });
	}

	res.json(persona);
});

app.listen(3000);
