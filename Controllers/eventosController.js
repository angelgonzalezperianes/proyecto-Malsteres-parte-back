const eventosCtrl={};
const eventoModelo = require('../models/eventos');

eventosCtrl.listEventos=async(req,res)=>{
    const eventos=await eventoModelo.find().sort({_id:-1});
    //console.log(eventos);
    res.json(eventos);
};
eventosCtrl.detallesEvento=async (req, res) => {
    //console.log(req.params.id) 
    const evento = await eventoModelo.findById(req.params.id) 
    res.json(evento)
};
eventosCtrl.deleteEvento= async (req, res) => {
    console.log(req.params.id) 
    const evento = await eventoModelo.findByIdAndRemove(req.params.id); 
    res.json(evento)
};
eventosCtrl.addEvento= async(req, res)=>{
    const {tipo, imagen, nombre, descripcion, fechaInicio, fechaFin,lugar, urlCompraEntrada}=req.body;
    const evento= new eventoModelo({
        tipo,
        imagen,
        nombre,
        descripcion,
        fechaInicio,
        fechaFin,
        lugar,
        urlCompraEntrada
    });
    await evento.save();
    res.json({msg:"evento guardado OK", evento: evento});
}
eventosCtrl.editEvento= async (req, res)=>{
    const filtro={"_id": req.params.id};
    const {tipo,imagen, nombre, descripcion, fechaInicio, fechaFin, lugar, urlCompraEntrada}=req.body;
    const update={tipo,imagen, nombre, descripcion, fechaInicio, fechaFin, lugar, urlCompraEntrada};
   let documento = await eventoModelo.findOneAndUpdate(filtro, update, {
       new: true,
       upsert: true
   });
   res.json(documento);
}

module.exports=eventosCtrl;