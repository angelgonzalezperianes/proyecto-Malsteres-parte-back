const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventoSchema = new Schema({
    tipo: [],
    imagen: {
        type: String,
        required: false
    },
    nombre: {
        type: String,
        required: false
    },
    descripcion: {
        type: String,
        required: false
    },
    direccion: {
        type: String,
        required: false
    },
    fechaInicio: {
        type: Date
    },
    fechaFin: {
        type: Date
    },
    lugar: {
        latitud: Number,
        longitud: Number
    },
    urlCompraEntrada: String
})

module.exports = mongoose.model('eventos', EventoSchema)