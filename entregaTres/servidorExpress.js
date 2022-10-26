const express = require("express");
const Contenedor = require("../entregaDos/entregable2");
const app = express();

app.get("/productos", async (req, res) => {
	res.send(await contenedor.getAll());
});

app.get("/productosRandom", async (req, res) => {
	const listaDeProductos = await contenedor.getAll();
	const numeroRandom = parseInt(Math.random() * listaDeProductos.length);
	res.send(listaDeProductos[numeroRandom]);
});

app.listen(8080, () => {
	console.log("El servidor esta corriendo");
});

const contenedor = new Contenedor("productos.txt"); // si pongo "./productos.txt" me devuelve los productos de esta carpeta y del entregable 2 y no entiendo porque
