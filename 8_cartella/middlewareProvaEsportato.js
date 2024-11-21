const middlewareProva = (req, res, next) => {
	const { method, url } = req;
	const time = new Date().getMinutes();

	console.log(method, url, time);
	// O uso next
	next();

	// Oppure un send
	// res.send("Dal middleware");
};

module.exports = middlewareProva;
