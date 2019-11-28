/* Archivo que contendra las rutas de las cervezas */
const express = require('express');
const router = express.Router();
const {listCervezas, editCerveza,
    detallesCervezas, deleteCerveza, addCerveza}=require('../Controllers/cervezasController.js');

router.route('/')
    .get(listCervezas)
    .post(addCerveza)
router.route('/:id')
    .get(detallesCervezas)
    .post(editCerveza)
    .delete(deleteCerveza)
module.exports = router;