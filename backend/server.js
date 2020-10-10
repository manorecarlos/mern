// Importando as funcionalidades do express e do body parser
const express = require('express');
const bodyParser = require('body-parser');

// Criando uma variável para armazenar a aplicação
const app = express();

// Importando as rotas
const placesRoutes = require('./routes/places');

app.use(placesRoutes);

// Aplicação ouvirá a porta 5000
app.listen(5000);