const http = require("http");
const PORT = 8080; // si ponemos port en 0 nos generara un puerto aleatorio que este libre en la compu
const server = http.createServer((req, res) => {
	const hora = new Date();
	if (hora.getHours() > 5 && hora.getHours() < 13) {
		res.end(`Buenos dias son las ${hora.toDateString()}`);
	} else if (hora.getHours() >= 20) {
		res.end(`Buenos noches son las ${hora.toDateString()}`);
	} else {
		res.end(`Buenos tardes son las ${hora.toDateString()}`);
	}
});

const connectServer = server.listen(PORT, () => {
	console.log(`Servidor escuchando en el puerto ${connectServer.address()}`);
});
