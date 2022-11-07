const { Router, response } = require("express");
const ProductContenedor = require("./contenedores/productModel");

const productRouter = Router();

const productoContenedor = new ProductContenedor();

productRouter.get("/:id", (req, res) => {
	console.log(req.params.id);
	const product = productoContenedor.getById(req.params.id);
	if (product === null) {
		res.json({ error: "producto no encontrado" });
	} else {
		res.json(product);
	}
});

productRouter.get("/", (req, res) => {
	console.log("todos los productos");
	const products = productoContenedor.getAll();
	res.json({ products });
});
productRouter.post("/", (req, res) => {
	console.log("crear producto", req.body);
	const productId = productoContenedor.save(req.body);
	res.json({
		...req.body,
		id: productId,
	});
});
productRouter.put("/:id", (req, res) => {
	res.json(productoContenedor.update(req.params.id, req.body));
});
productRouter.delete("/:id", (req, res) => {
	res.json(productoContenedor.deleteById(req.params.id));
});

module.exports = productRouter;
