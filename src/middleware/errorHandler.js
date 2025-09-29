/* MIDDLEWARE ES PARA EL MANEJO CENTRAL DE ERRORES. */

const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);
    
    res.status(500).json({
        success: false,
        error: "Error interno del servidor",
        mensaje: process.env.NODE_ENV === 'development' ? err.message : 'Algo salió mal'
    });
};

const notFoundHandler = (req, res) => {
    res.status(404).json({
        success: false,
        error: "Endpoint no encontrado",
        mensaje: `La ruta ${req.originalUrl} no existe`
    });
};

module.exports = {
    errorHandler,
    notFoundHandler
};