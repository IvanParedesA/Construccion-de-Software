const express = require('express');
const path = require('path');

const router = express.Router();

const pizzasController = require('../controllers/pizzas.controller');

router.get('/lista', pizzasController.get_lista);

router.get('/nuevo', pizzasController.get_nuevo);

router.post('/nuevo', pizzasController.post_nuevo);

router.get('/pedir', pizzasController.get_pedir);

router.post('/pedir', pizzasController.post_pedir);

router.get('/pedido', pizzasController.get_pedido);

module.exports = router;