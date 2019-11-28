const cervezasCtrl={};
const cervezaModelo = require('../models/cervezas.js');

cervezasCtrl.listCervezas=async (req,res)=>{
    const cervezas=await cervezaModelo.find().sort({_id:-1});
    res.json(cervezas);
}
cervezasCtrl.detallesCervezas=async(req,res)=>{
    const cervezas=await cervezaModelo.findById(req.params.id);
    res.json(cervezas)
}
cervezasCtrl.deleteCerveza=async(req,res)=>{
    const cervezas=await cervezaModelo.findByIdAndRemove(req.params.id);
    res.json({msg:"cerbe eliminada", cerveza: cervezas});
}
cervezasCtrl.addCerveza=async(req,res)=>{
    const {nombre, marca, idInterno, imagenBotella, atributos, ibu, abv, 
        kcal, estilo, fabricante, precio, urlcompra, cervezasSimilares}=req.body;
    const cervezas= new cervezaModelo({
        nombre, 
        marca,
        idInterno,
        imagenBotella,
        atributos,
        ibu,
        abv,
        kcal,
        estilo,
        fabricante,
        precio,
        urlcompra,
        cervezasSimilares 
    });
    await cervezas.save();
    res.json({msg:"cerveza guardada OK", cerveza: cervezas});
}
cervezasCtrl.editCerveza= async (req,res)=>{
    const filtro={"_id": req.params.id};
    const {nombre, marca, idInterno, imagenBotella, atributos, ibu, abv, 
        kcal, estilo, fabricante, precio, urlcompra, cervezasSimilares}=req.body;
    const update={nombre, marca, idInterno, imagenBotella, 
        atributos, ibu, abv, kcal, estilo,
         fabricante, precio, urlcompra, cervezasSimilares};
    let documento = await cervezaModelo.findOneAndUpdate(filtro, update, {
        new: true,
        upsert: true 
      });
    res.json(documento);
}


module.exports = cervezasCtrl