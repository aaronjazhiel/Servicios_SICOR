'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

let generarToken = require('./modelo').generarToken;
let consultarMedicamento= require('./modelo').consultarMedicamento;
let registrarReceta = require('./modelo').registrarReceta;
let cancelarReceta = require('./modelo').cancelarReceta;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// ===== Public Routes ======
// Post all public genera token
app.post(`/RecetaSicor/services/autorizar/login`, (req, res) => {
  res.json(generarToken);
});

// Post all public Consultar Medicamento
app.post(`/RecetaSicor/services/recetaSicor/consultaMedicamento`, (req, res) => {
  res.json(consultarMedicamento);
});



// Post all public Consultar Medicamento
app.put(`/RecetaSicor/services/recetaSicor/registrar`, (req, res) => {
  res.json(registrarReceta);
});


// Post all public Cancelar Receta
app.delete(`/RecetaSicor/services/recetaSicor/cancelar`, (req, res) => {
  res.json(cancelarReceta);
});



app.listen(9090);
console.log('Listening on localhost:9090');
