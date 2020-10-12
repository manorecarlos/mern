// Importando as funcionalidades do express e do body parser
const express = require('express');
const bodyParser = require('body-parser');

// Importando as rotas
const placesRoutes = require('./routes/places');
const usersRoutes = require('./routes/users');

// Importando o modelo de erros
const HttpError = require('./models/http-error');

// Criando uma variável para armazenar a aplicação
const app = express();

app.use(bodyParser.json());

app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An unknown error occurred!'});
})

// Aplicação ouvirá a porta 5000
app.listen(5000);