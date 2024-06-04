const CampanaMarketing = require('../models/CampanaMarketing');

exports.obtenerCampanasMarketing = async (req, res) => {
    try {
        const campanas = await CampanaMarketing.find();
        res.json(campanas);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

exports.crearCampanaMarketing = async (req, res) => {
    try {
        const campana = new CampanaMarketing(req.body);
        await campana.save();
        res.status(201).json(campana);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

exports.obtenerCampanaMarketing = async (req, res) => {
    try {
        const campana = await CampanaMarketing.findById(req.params.id);
        if (!campana) {
            return res.status(404).json({ mensaje: 'Campaña no encontrada' });
        }
        res.json(campana);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

exports.actualizarCampanaMarketing = async (req, res) => {
    try {
        const campana = await CampanaMarketing.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!campana) {
            return res.status(404).json({ mensaje: 'Campaña no encontrada' });
        }
        res.json(campana);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

exports.eliminarCampanaMarketing = async (req, res) => {
    try {
        const campana = await CampanaMarketing.findByIdAndDelete(req.params.id);
        if (!campana) {
            return res.status(404).json({ mensaje: 'Campaña no encontrada' });
        }
        res.json({ mensaje: 'Campaña eliminada' });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};
