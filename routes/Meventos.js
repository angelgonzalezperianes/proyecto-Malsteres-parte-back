const express = require('express');
const router = express.Router();

const {eventos} = require ('../Controllers/MeventosController')

router.route('/')
    .get(eventos)

module.exports= router;