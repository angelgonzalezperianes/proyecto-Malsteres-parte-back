/* Archivo que contendra las rutas de las cervezas */
const express = require('express');
const router = express.Router();
const {buscarTitulo, buscarTodo}=require('../Controllers/buscadorController.js');

router.route('/:titulo')
    .get(buscarTitulo)

module.exports = router;