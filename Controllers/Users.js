const usersCtrl={}
//importamos modelo a usar
const userModel=require('../models/usuarios');

usersCtrl.listUsers=async(req,res)=>{
    const usuarios= await userModel.find();
    res.json(usuarios);
};

usersCtrl.deleteUser= async(req, res)=>{
    /**o podria usar fin */
    const borrado= await userModel.findByIdAndRemove(req.params.id);
    console.log(borrado);
    res.json('usuario Borrado');
};

usersCtrl.detallesUser= async(req, res)=>{
    const usuario= await userModel.findById(req.params.id);
    console.log(usuario);
    res.json(usuario);
};

usersCtrl.addUser= async(req, res)=>{
    //aki el formato a seguir es el de eskema
   //!!!los campos mismo nombre mismo orden sino peta
   const{nombre,apellidos,nickname,email,contraseña, cervezasFavoritas,imagenAvatar }=req.body;
   console.log(req.body); 
   console.log(contraseña);
   const usuario= new userModel({
        nombre,
        apellidos,
        nickname,
        email,
        contraseña,
        cervezasFavoritas,
        imagenAvatar
    });
    await usuario.save();
    res.json({msg:"usuario Guardado", usuario: req.body});
};

module.exports=usersCtrl;