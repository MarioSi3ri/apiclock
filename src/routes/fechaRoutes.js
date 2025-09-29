/** RUTAS PARA EL MANEJO DE LAS FECHAS. */

const express = require('express');
const router = express.Router();
const { 
    obtenerFechaActual, 
    obtenerFechaFormateada 
} = require('../controllers/fechaController');

// Ruta principal - Fecha Actual completa.
router.get('/', obtenerFechaActual);

// Ruta para Fecha Formateada.
router.get('/formateada', obtenerFechaFormateada);

// Ruta de Salud para verificar que la API funciona.
router.get('/health', (req, res) => {
    res.json({
        success: true,
        mensaje: 'API de Fecha funcionando correctamente',
        timestamp: new Date().toISOString()
    });
});

module.exports = router;