// Importando as funcionalidades do express
const express = require('express');

// Desacoplando o módulo de rotas do express em uma nova variável
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('GET Request in Places');
    res.json({message: 'It works!'})
});

// Exportando as rotas
module.exports = router;