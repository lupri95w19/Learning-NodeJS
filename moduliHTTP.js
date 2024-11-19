// Moduli HTTP
// Servono per creare dei web server

const http = require("http");
const server = http.createServer((req, res) => {
	// request e response
	// res.write("Benvenuto"); sostituito dal req url === "/"

	// Routing
	if (req.url === "/") {
		res.end("benvenuto col routing");
	} else if (req.url === "/luca") {
		res.end("Il profilo di Luca col routing");
	} else {
		res.end("<h1>Errore</h1>");
	}
});
// Commento altrimenti avrò problemi in futuro per la porta
// server.listen(3000);
// http://localhost:3000/ e avremo in pagina il contenuto del write, per chiudere il server basta fare CTRL+C sul terminale
