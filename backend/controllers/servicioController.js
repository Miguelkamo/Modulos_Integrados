const Servicio = require('../models/Servicio');

exports.obtenerServicios = async (req, res) => {
    try {
        const servicios = await Servicio.find();
        res.json(servicios);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

exports.crearServicio = async (req, res) => {
    try {
        const nuevoServicio = new Servicio(req.body);
        await nuevoServicio.save();
        res.status(201).json(nuevoServicio);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

exports.actualizarServicio = async (req, res) => {
    try {
        const { id } = req.params;
        const servicioActualizado = await Servicio.findByIdAndUpdate(id, req.body, { new: true });
        if (!servicioActualizado) {
            return res.status(404).json({ mensaje: 'Servicio no encontrado' });
        }
        res.json(servicioActualizado);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

exports.eliminarServicio = async (req, res) => {
    try {
        const { id } = req.params;
        const servicioEliminado = await Servicio.findByIdAndDelete(id);
        if (!servicioEliminado) {
            return res.status(404).json({ mensaje: 'Servicio no encontrado' });
        }
        res.json({ mensaje: 'Servicio eliminado' });
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};
