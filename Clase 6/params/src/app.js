const express = require("express");
const villanos = require("./datos/heroes").villanos;

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Server ONLINE");
});

app.get("/villanos", (req, res) => {
  res.json(villanos);
});

app.get("/villanos/:id", (req, res) => {
  let { id } = req.params;
  id = Number(id);
  if (isNaN(id)) {
      console.log(`Dato: ${typeof(id)}`);
      return res.send("El id debe ser de tipo numerico");
  }
  let villano = villanos.find(villano=> villano.id === id);
  if(!villano){
    res.send("Introduzca un valor entre 1 y 20")
  }
  res.send(villano)
});

app.get("/datos/:nombre/:apellido", (req, res) => {
  // Nombre y apellido JS los establece como palabras, es decir que si la ruta presenta dos palabras separadas por barras entrara en esta, a menos que interpongamos una ruta especifica, en este caso DATOS

  let { nombre, apellido } = req.params;
  res.send(`Nombre Ingresado: ${nombre}, Apellido: ${apellido}`);
});

app.listen(PORT, () => {
  console.log("Servidor OK en PORT" + PORT);
});

app.get("*", (req, res) => {
  res.send("ERROR 404 || NOT FOUND");
  // Caracter tipo comodin, cualquier ruta no especificada ira aqui
});

