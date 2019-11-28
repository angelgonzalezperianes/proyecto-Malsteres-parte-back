const buscadorCtrl={};
const cervezaModelo = require('../models/cervezas.js');

buscadorCtrl.buscarTitulo=async (req,res)=>{
   const cerve= await cervezaModelo.findOne({nombre: {$regex: req.params.titulo, $options:'i'}}, (error, result)=>{
       if(error){console.log(error)}
       return result;
   }); 
   console.log(cerve);
    res.json(cerve);
};
module.exports=buscadorCtrl;