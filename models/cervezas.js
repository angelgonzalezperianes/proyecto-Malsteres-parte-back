const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CervezaSchema = new Schema({
    nombre: {
        type: String,
        required: false,
    },
    marca: {
        type: String,
        required: false,
    },
    idInterno: {
        type: Number,
        required: false,
    },
    imagen: {
        type: String,
        required: false,
    },
    descripcion: {
        type: String,
        required: false,
    },
    atributos: {
        frutalidad: {
            type: Number,
            required: false
        },
        lupulo: {
            type: Number,
            required: false
        },
        grano: {
            type: Number,
            required: false
        },
        acidez: {
            type: Number,
            required: false
        },
        trigo: {
            type: Number,
            required: false
        },
        dulzor: {
            type: Number,
            require: false
        },
    },

    ibu: {
        type: Number,
        required: false
    },
    abv: {
        type: Number,
        required: false
    },
    kcal: {
        type: Number,
        required: false
    },
    estilo: {
        type: String,
        required: false
    },

    fabricante: {
        type: String,
        required: false
    },

    precio: {
        type: Number,
        required: false
    },
    urlcompra: {
        type: String,
        //required: true //No estoy seguro de necesitarla ya que la pantalla de compra es dinamica en función del id.
    },

    cervezasSimilares: []
})

module.exports = mongoose.model('cervezas', CervezaSchema)