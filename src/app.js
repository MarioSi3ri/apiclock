/* APLICACIÓN PRINCIPAL DE LA API DE LA FECHA.*/

const express = require('express');
const cors = require('cors');
const fechaRoutes = require('./routes/fechaRoutes');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware.
app.use(cors());
app.use(express.json());

// Rutas.
app.use('/api/fecha', fechaRoutes);

// Ruta raíz-principal.
app.get('/', (req, res) => {
    res.json({
        mensaje: 'Bienvenido a la API de FECHA',
        endpoints: {
            fechaActual: '/api/fecha',
            fechaFormateada: '/api/fecha/formateada',
            healthCheck: '/api/fecha/health'
        },
        documentacion: 'Usa los endpoints mencionados para obtener la fecha actual:'
    });
});

// Manejo de los errores.
app.use(notFoundHandler);
app.use(errorHandler);

// Iniciar el servidor.
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(`API de la Fecha disponible en http://localhost:${PORT}/api/fecha`);
});

module.exports = app;