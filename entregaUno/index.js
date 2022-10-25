class Usuario {
	constructor(nombre, apellido, libros, mascotas) {
		this.nombre = nombre || "";
		this.apellido = apellido || "";
		this.libros = libros || [];
		this.mascotas = mascotas || [];
	}

	getFullName() {
		return console.log(`Nombre Completo: ${this.nombre}  ${this.apellido}`);
	}
	addMascota(mascota) {
		return this.mascotas.push(mascota);
	}
	countMascotas() {
		return console.log(this.mascotas.length);
	}
	addBooks(nombre, autor) {
		return this.libros.push({ nombre, autor });
	}
	getBooksNames() {
		return this.libros.map((libro) => console.log(`Libros : ${libro.nombre}`));
	}
}

let usuario = new Usuario(
	"Christian",
	"Natale",
	[{ nombre: "La vuelta al mundo en 80 dias", autor: "Julio Verne" }],
	[{ nombreMascota: "Oliver" }]
);
usuario.getFullName();
usuario.addBooks("ruelta", "jorge luis borges");
usuario.addMascota("Catriel");
usuario.countMascotas();
usuario.getBooksNames();
