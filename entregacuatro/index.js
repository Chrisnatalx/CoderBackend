const express = require("express");
const productRouter = require("./products");

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.use("/", express.static("public"));

app.use(express.json());

app.use("/api/products", productRouter);

app.listen(port, () => {
	console.log(`RUN http://localhost:${port}`);
});

app.on("error", (error) => {
	console.log(error);
});
