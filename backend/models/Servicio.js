const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        enum: ['Electrónica', 'Hogar', 'Salud', 'Educación', 'Tecnología'],
        required: true
    }
});

module.exports = mongoose.model('Servicio', servicioSchema);
