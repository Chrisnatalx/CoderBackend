const express = require("express");
const Contenedor = require("../entregaDos/entregable2");
const app = express();

app.get("/productos", (req, res) => {
	res.send(contenedor.getAll());
});

app.get("/productosRandom", (req, res) => {
	res.send(contenedor.getById(Math.round(Math.random() * 3) + 1));
});

app.listen(8080, () => {
	console.log("El servidor esta corriendo");
});

const contenedor = new Contenedor("./productos.txt");
