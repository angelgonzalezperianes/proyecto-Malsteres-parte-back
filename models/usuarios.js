const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({

    nombre: {
        type: String,
        required: false
    },
    apellidos: {
        type: String,
        required: false
    },
    nickname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    contraseña: {
        type: String,
        required: false
    },
    cervezasFavoritas: [],
    imagenAvatar: String
})

module.exports = mongoose.model('usuarios', UsuariosSchema)
 