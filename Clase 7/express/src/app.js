import express from "express";
import fs from "fs";
import path from "path";
import dirname from "../../utils"
const PORT = 3000;

const app = express();

console.log(dirname);



app.use(express.json()); // Transformar informacion que viene via body en las request a un json
app.use(express.urlencoded({ extended: true })); // Me permite recibir informacion compleja via request

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send("OK");
});

app.get("/suma/:valor1/:valor2", (req, res) => {
  let { valor1, valor2 } = req.params;
  valor1 = Number(valor1);
  valor2 = Number(valor2);

  try {
    
  } catch (error) {
  return res.status(500).send("Error ineseperado, intente nuevamente.")  
  }

  if (isNaN(valor1 && valor2)) {
    return res.status(400).send("Error maquina solo valores numericos");
  }
  let resultado = `La suma de ${valor1} y ${valor2} es:${valor1 + valor2}`;
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(resultado);
});

const server = app.listen(PORT, () => {
  console.log(`Server escuchando en puerto ${PORT}`);
});
