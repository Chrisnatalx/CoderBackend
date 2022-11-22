const express = require("express");
const { Server: SocketServer } = require("socket.io");
const { Server: HttpServer } = require("http");

const ProductContenedor = require("./src/contenedor/ProductContenedor");
const app = express();

const httpServer = new HttpServer(app);

const io = new SocketServer(httpServer);

io.on("connection", (socket) => {
	console.log("socket id: ", socket.id);

	socket.emit("products", productoContenedor.getAll());

	//socket.on('products', productoContenedor.getAll()); {
	//   console.log({newMessage});
	//   messages.push(newMessage);
	//   io.sockets.emit('conversation', messages);
	// });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/static', express.static('public'));

app.set("view engine", "ejs");

const productoContenedor = new ProductContenedor();

app.get("/", (req, res) => {
	// const personList = personaContenedor.getAll();
	const personList = [];
	res.render("pages/index", { list: personList });
});

app.post("/product", (req, res) => {
	console.log(req.body);
	productoContenedor.save(req.body);

	io.sockets.emit("products", productoContenedor.getAll());

	res.redirect("/"); // TODO enviar datos del historial
});
app.get("/product", (req, res) => {
	res.json(productoContenedor.getAll()); // TODO enviar datos del historial
});

app.get("/mascots", (req, res) => {
	const mascots = [
		{ name: "Sammy" },
		{ name: "Tux" },
		{ name: "Moby Dock" },
		{ name: "Pug" },
		{ name: "Firulaus" },
	];
	const tagline = "Mascots";

	res.render("pages/mascots", {
		mascots,
		tagline,
	});
});

app.get("/about", (req, res) => {
	res.render("pages/about", {});
});

// app.get('/datos', (req, res) => {
//   res.render('pages/datos', {});
// });

app.get("/datos", (req, res) => {
	res.render("pages/datos", {
		min: req.query.min,
		nivel: req.query.nivel,
		max: req.query.max,
		titulo: req.query.titulo,
	});
});

const PORT = 8080;
httpServer.listen(PORT, () =>
	console.log(`Servidor iniciado en el puerto ${PORT}`)
);
