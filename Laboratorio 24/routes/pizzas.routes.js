const express = require('express');
const path = require('path');
const hasCreate = require('../util/has-create');

const router = express.Router();

const pizzasController = require('../controllers/pizzas.controller');

router.get('/buscar/:valor_busqueda', pizzasController.get_buscar);

router.get('/lista/:id', pizzasController.get_lista);

router.get('/lista', pizzasController.get_lista);

router.get('/nuevo', hasCreate, pizzasController.get_nuevo);

router.post('/nuevo', hasCreate, pizzasController.post_nuevo);

router.get('/pedir', pizzasController.get_pedir);

router.post('/pedir', pizzasController.post_pedir);

router.get('/pedido', pizzasController.get_pedido);

module.exports = router;