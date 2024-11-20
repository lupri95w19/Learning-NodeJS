// Usare i JSON
// La cartella 6_cartella è richiesta
//  - API: Interfaccia per comunicare con il DB (json, res.json)
//  - SSR: Server Side Rendering (template, ejs, res.render)
// npm i ejs

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
