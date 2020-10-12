// Importando as funcionalidades do express
const express = require('express');
const { check } = require('express-validator');

// Importando o controller
const placesControllers = require('../controllers/places-controller');

// Desacoplando o módulo de rotas do express em uma nova variável
const router = express.Router();

// Rota para encontrar um lugar através do id
router.get('/:pid', placesControllers.getPlaceById);

// Rota para encontrar um lugar criado pelo usuário
router.get('/user/:uid', placesControllers.getPlacesByUserId);

// Rota para criar um lugar
router.post(
    '/',
    [
        check('title').not().isEmpty(),
        check('description').isLength({min: 5})
    ],
    placesControllers.createPlace
);

// Rota para modificar parcialmente um lugar
router.patch(
    '/:pid',
    [
        check('title').not().isEmpty(),
        check('description').isLength({min: 5})
    ],
    placesControllers.updatePlace
);

// Rota para deletar um lugar
router.delete('/:pid', placesControllers.deletePlace);

// Exportando as rotas
module.exports = router;