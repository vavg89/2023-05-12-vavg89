"use strict";
const express = require("express");
const app = express();
const filtrarPorEdad = require("./routes/08-route");
const addAnimalYEspecie = require("./routes/07-route");
const updateAnimal = require("./routes/09-route");
const deleteAnimal = require("./routes/10-route");
const ordenarPorEdad = require("./routes/11-route");
const mostrarLaMediaDelPeso = require("./routes/12-route");

app.use(express.json());
app.use(filtrarPorEdad);
app.use(addAnimalYEspecie);
app.use(updateAnimal);
app.use(deleteAnimal);
app.use(ordenarPorEdad);
app.use(mostrarLaMediaDelPeso);

module.exports = app;
