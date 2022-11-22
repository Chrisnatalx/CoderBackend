const products = [
	{
		id: 1,
		title: "Pizza",
		price: 100,
		thumbnail:
			"https://www.recetasdesbieta.com/wp-content/uploads/2018/09/Como-hacer-pizza-casera-rapida-con-masa-de-pizza-sin-repos-1.jpg",
	},
	{
		id: 2,
		title: "Ensalada",
		price: 200,
		thumbnail:
			"https://images.hola.com/imagenes/cocina/noticiaslibros/20210805194067/ensaladas-con-tres-cuatro-ingredientes/0-981-971/ingredientes-adobe-m.jpg",
	},
];

class ProductContenedor {
	constructor() {
		this.products = products;
	}

	save(product) {
		product.id = this.getId();
		this.products.push(product);
		return product.id;
	}

	getId() {
		const lastProduct = this.products[this.products.length - 1];
		if (lastProduct == null) {
			return 1;
		} else {
			const lastId = lastProduct.id;
			return lastId + 1;
		}
	}
	getById(id) {
		const product = this.products.find((item) => item.id == parseInt(id));
		if (!product) {
			null;
		} else {
			return product;
		}
	}
	getAll() {
		return this.products;
	}
	deleteById(id) {
		const productIndex = this.products.findIndex(
			(item) => item.id == parseInt(id)
		);
		if (productIndex == -1) {
			return { error: "Producto no encontrado" };
		}
		return this.products.splice(productIndex, 1);
	}
	deleteAll() {
		this.products = [];
		return;
	}
	update(id, product) {
		const productIndex = this.products.findIndex(
			(item) => item.id == parseInt(id)
		);
		if (productIndex == -1) {
			return { error: "Producto no encontrado" };
		}
		return this.products.splice(productIndex, 1, {
			id: parseInt(id),
			...product,
		});
	}
}

module.exports = ProductContenedor;
