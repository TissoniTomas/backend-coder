const express = require("express");
const modulo = require("./heroes");
const heroes = require("./heroes").heroes;
const villanos = require("./heroes").villanos; // Puedo llamar a los objetos declarados previamente en heroes.js por separados

// Puerto + llamar a express

const PORT = 3000;

// Iniciailizar express

const app = express();

app.get("/", (req, res) => {
  res.send("Server basico con Express");
});


app.get("/heroes", (req, res) => {
    // let limit = req.query.limit;
    // let skip = req.query.skip;

    let {limit, skip} = req.query
    let resultado = heroes;
    if(skip && skip > 0 ){
        resultado = resultado.slice(skip)
    }
    if(limit && limit > 0 ){
        resultado = resultado.slice(0, limit)
    }
    res.json(resultado);
  });

app.get("/contacto", (req, res) => {
  console.log(req.query);
  if (req.query.nombre) {
    res.send("Contact Page" + req.query.nombre);
  } else {
    res.send("Contact Page");
  }

  res.send("Contact Page");
});

// Hacemos que el servidor escuche
app.listen(PORT, () => {
  console.log(`Server OK en port ${PORT}`);
});
