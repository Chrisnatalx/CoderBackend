const express = require("express");

const app = express();

// get cuando queremmos recupera un recurso
// post cuando queremos enviar un recuerso
// put cunado queremos actualizar un recurso
// delete cuando queremos eliminar un recurso

app.get("/", function (req, res) {
	res.send("esta es una peticion get al navegador");
});

app.listen(8080, () => {
	console.log("El servidor esta corriendo");
});
