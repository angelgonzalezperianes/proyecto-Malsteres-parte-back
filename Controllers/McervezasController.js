const McervezasController={};
const cervezaModelo = require('../models/cervezas.js');

McervezasController.cervezas = async (req, res, next) =>{
    const datos = await cervezaModelo.find({"estilo":"Lager"}).limit(4);
    res.json(datos)
}

module.exports = McervezasController;
