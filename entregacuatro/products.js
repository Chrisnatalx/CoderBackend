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
		id: productId.id,
	});
});
productRouter.put("/:id", (req, res) => {
	productoContenedor.update(req.params.id, req.body);
	console.log("crear producto" + req.params.id, req.body);
	res.json({ message: "producto actualizado" });
});
productRouter.delete("/:id", (req, res) => {
	productoContenedor.deleteById(req.params.id);
	console.log("borrar un producto" + req.params.id);
	res.json({ message: "producto eliminado" });
});

module.exports = productRouter;
