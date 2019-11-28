const express = require('express');
const router = express.Router();
const {listEventos, detallesEvento,
    editEvento, deleteEvento, addEvento}=require('../Controllers/eventosController');

router.route('/') 
    .get(listEventos)
    .post(addEvento)

router.route('/:id') 
    .get(detallesEvento)
    .post(editEvento)
    .delete(deleteEvento)
module.exports = router;