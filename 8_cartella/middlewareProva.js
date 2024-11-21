// Middleware
// Si pone tra l'arriva della richiesta e la risposta
// Il middleware deve essere registrato prima degli endpoint
// Middleware possono essere custom, express(static), terze parti
// Controllare 8_cartella
const express = require("express");
const app = express();

// const middlewareProva = (req, res, next) => {
// 	const { method, url } = req;
// 	const time = new Date().getMinutes();

// 	console.log(method, url, time);
// 	// O uso next
// 	// next();

// 	// Oppure un send
// 	res.send("Dal middleware");
// };

// Reso modulo dalla cartella
const middlewareProva = require("./8_cartella/middlewareProvaEsportato");

// app.get("/", middlewareProva, (req, res) => {
// 	res.send("Homepage");
// });
// app.get("/about", middlewareProva, (req, res) => {
// 	res.send("About");
// });

//
//
//
//

// Usare i middleware su tutti
// app.use(middlewareProva);

// // Solamente se fanno parte delle persone
// app.use("/persone");

// app.get("/", (req, res) => {
// 	res.send("Homepage");
// });
// app.get("/about", (req, res) => {
// 	res.send("About");
// });

// Multiple function middleware
const auth = (req, res, next) => {
	console.log("Accesso effettuato");
	next();
};

app.use([middlewareProva, auth]);
app.get("/", (req, res) => {
	res.send("Homepage");
});
app.get("/about", (req, res) => {
	res.send("About");
});

app.listen(3000);
