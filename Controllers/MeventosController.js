const MeventosController={};
const eventosModelo = require('../models/eventos.js');

MeventosController.eventos = async (req, res, next) =>{
    const datos = await eventosModelo.find({"tipo":"festival"}).limit(5);
    res.json(datos)
}

module.exports = MeventosController;
