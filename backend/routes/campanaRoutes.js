const express = require('express');
const router = express.Router();
const campanaController = require('../controllers/campanaController');

router.get('/', campanaController.obtenerCampanasMarketing);
router.post('/', campanaController.crearCampanaMarketing);
router.get('/:id', campanaController.obtenerCampanaMarketing);
router.put('/:id', campanaController.actualizarCampanaMarketing);
router.delete('/:id', campanaController.eliminarCampanaMarketing);

module.exports = router;
