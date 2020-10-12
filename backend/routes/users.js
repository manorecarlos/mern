// Importando as funcionalidades do express
const express = require('express');
const { check } = require('express-validator');

// Importando o controller
const usersControllers = require('../controllers/users-controller');

// Desacoplando o módulo de rotas do express em uma nova variável
const router = express.Router();

// Rota para listar todos os usuários
router.get('/', usersControllers.getUsers);

// Rota para criar um novo usuário
router.post(
    '/signup',
    [
        check('name').not().isEmpty(),
        check('email').normalizeEmail().isEmail(),
        check('password').isLength({ min: 6 })
    ],
    usersControllers.signup
);

// Rota para o login
router.post('/login', usersControllers.login);

// Exportando as rotas
module.exports = router;