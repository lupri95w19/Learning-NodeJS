// Aggiungere file statici
// creare cartella public
const express = require("express");
const app = express();
app.use(express.static("public"));

// app.get("/", function (req, res) {
// 	res.send("Hello World, introduzione a Express");
// });

app.get("/", (req, res) => {
	res.sendFile("home.html", { root: __dirname + "/public" });
});

app.get("/about", (req, res) => {
	res.sendFile("about.html", { root: __dirname + "/public" });
});

app.get("/contacts", (req, res) => {
	res.sendFile("contacts.html", { root: __dirname + "/public" });
});

// qualsiasi cosa che non è stata gestita sopra, avrà questo
app.all("*", (req, res) => {
	res.sendFile("404.html", { root: __dirname + "/public" });
});

app.listen(3000);
