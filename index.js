// traemos a express
const express = require("express");

// creamos una aplicación
const app = express();

//le decimos el puerto en que queremos que corra la aplicación
const port = 3000;

//definimos la ruta
// tiene un callback que va a ejecutar la respuesta que enviemos al cliente.
//el callback siempre tiene dos parámetros "req" y "res".
app.get ("/", (req, res) => {
  res.send("Hola mi server en express");
});


app.get ("/new-route", (req, res) => {
  res.send("Hola, soy una nueva ruta");
});

app.get ("/products", (req, res) => {
  res.json({
    name: "Product 1",
    price: 1000,
  });
});

//le decimos a la aplicación en que puesto escuchar
// además creamos un callback que nos avisará cuando esté corriendo
app.listen(port, () => {
  console.log("mi port" + port);
});