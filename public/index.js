console.log("Cargando..");

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log(e);

	const product = {
		title: document.getElementById("title").value,
		price: parseInt(document.getElementById("price").value),
		thumbnail: document.getElementById("thumbnail"),
		value,
	};
	console.log(product);
	fetch("/api/products", {
		method: "post",
		body: JSON.stringify(product),
		headers: {
			"Content-Type": "aplicatopm/json",
		}
			.then((response) => response.json())
			.then((date) => console.log(data)),
	});
});
