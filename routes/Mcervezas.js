const express = require('express');
const router = express.Router();

const {cervezas} = require ('../Controllers/McervezasController')

router.route('/')
    .get(cervezas)

module.exports= router;