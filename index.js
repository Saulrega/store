const express = require("express");
const routerApi = require('./routes');
const cors = require('cors');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json())
const whiteList = ["http://localhost:5050"]
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true)
    } else{
      callback(new Error('Acceso denegado'))
    }
  }
}
app.use(cors(options))

app.get ("/", (req, res) => {
  res.send("Hola mi server en express");
});


app.get ("/new-route", (req, res) => {
  res.send("Hola, soy una nueva ruta");
});




routerApi(app)


app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)



app.listen(port, () => {
  console.log("mi port" + port);
});
