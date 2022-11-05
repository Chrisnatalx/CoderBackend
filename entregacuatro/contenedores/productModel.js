const products = [
	{
		id: 1,
		title: "Pizza",
		price: 100,
		thumbnaul: "pizza.jpg",
	},
	{
		id: 2,
		title: "Ensalada",
		price: 80,
		thumbnaul: "ensalada.jpg",
	},
];
class ProductContenedor {
	constructor() {
		this.products = this.products;
	}

	save(product) {
		product.id = this.getId();
		this.products.push(product);
		return product.id;
	}

	getId() {
		const lastProduct = this.products[this.products.length - 1];
		const lastId = lastProduct.id;
		return lastId + 1;
	}
	getById(id) {
		const product = this.products.find((item) => item.id == parseInt(id));
		if (!product) null;
		return product;
	}
	getAll() {
		return this.products;
	}
	deleteById(id) {
		const productIndex = this.products.find((item) => item.id == parseInt(id));
		this.products.splice(productIndex, 1);
		return;
	}
	deleteAll() {
		this.products = [];
		return;
	}
	update(id, product) {
		const productIndex = this.products.findIndex(
			(item) => item.id == parseInt(id)
		);
		this.products.splice(productIndex, 1, { id: parseInt(id), ...product });
	}
}

module.exports = ProductContenedor;
