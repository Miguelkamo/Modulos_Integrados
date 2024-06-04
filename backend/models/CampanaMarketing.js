const mongoose = require('mongoose');

const campanaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFin: {
        type: Date,
        required: true
    },
    presupuesto: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        enum: ['Planificada', 'En curso', 'Finalizada'],
        default: 'Planificada'
    }
});

module.exports = mongoose.model('CampanaMarketing', campanaSchema);
