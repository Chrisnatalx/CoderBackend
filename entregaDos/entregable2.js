const fs = require("fs");

class Contenedor {
	constructor(nombre) {
		this.nombre = nombre || "";
	}

	async getAll() {
		try {
			const contenido = await fs.promises.readFile(this.nombre, "utf-8");
			const data = JSON.parse(contenido);
			console.log(data);
			return data;
		} catch (err) {
			// await fs.writeFile(this.nombre, "[]");
			// console.log("No se encontro archivo con ese nombre, se creo uno");
			return [];
		}
	}

	async save(object) {
		try {
			const listaProductos = await this.getAll();
			if (listaProductos.length === 0) {
				object.id = 1;
			} else {
				object.id = listaProductos[listaProductos.length - 1].id + 1;
			}
			listaProductos.push(object);
			const ProductoParseado = JSON.stringify(listaProductos, null, 2);
			const productoAgregado = await fs.promises.writeFile(
				this.nombre,
				ProductoParseado
			);
			return productoAgregado;
		} catch (err) {
			console.log("No se pudo agregar el nuevo archivo");
		}
	}
	async getById(id) {
		try {
			const contenido = await this.getAll();
			return contenido.find((x) => x.id === id); // el find esta bien hecho ? o seria x => id === x.id
		} catch (err) {
			console.log("error");
		}
	}
	async deleteAll() {
		try {
			await fs.promises.unlink(this.nombre);
		} catch (err) {
			console.log("Error al eliminar archivo");
		}
	}

	async deleteById(id) {
		try {
			const contenido = await this.getAll();
			const nuevoContenido = contenido.filter((x) => x.id != id);
			fs.promises.writeFile(
				this.nombre,
				JSON.stringify(nuevoContenido, null, 2)
			);
		} catch (err) {
			console.log(err);
		}
	}
}

const contenedor = new Contenedor("./productos.txt");

const producto2 = {
	titulo: "producto2",
	precio: 170,
	descripcion: "algo distinto",
};

// contenedor.getAll();
// contenedor.getById(1);
// contenedor.deleteById(1);
// contenedor.deleteAll();
// contenedor.save();

module.exports = Contenedor;
