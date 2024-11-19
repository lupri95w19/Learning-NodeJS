// Introduzione a Express
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
