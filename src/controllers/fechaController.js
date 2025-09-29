/* CONTROLLER PARA MANEJAR LAS SOLICITUDES DE LA FECHA. */

const obtenerFechaActual = (req, res) => {
    try {
        const fecha = new Date();
        
        // Formatear la fecha en diferentes formatos
        const fechaISO = fecha.toISOString();
        const fechaLocal = fecha.toLocaleString();
        const fechaLegible = fecha.toString();
        
        // Respuesta con diferentes formatos de fecha
        res.json({
            success: true,
            fecha: {
                iso: fechaISO,
                local: fechaLocal,
                legible: fechaLegible,
                timestamp: fecha.getTime(),
                utc: fecha.toUTCString()
            },
            componentes: {
                año: fecha.getFullYear(),
                mes: fecha.getMonth() + 1, // Los meses van de 0-11.
                dia: fecha.getDate(),
                horas: fecha.getHours(),
                minutos: fecha.getMinutes(),
                segundos: fecha.getSeconds()
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Error al obtener la fecha",
            mensaje: error.message
        });
    }
};

const obtenerFechaFormateada = (req, res) => {
    try {
        const { formato } = req.query;
        const fecha = new Date();
        
        let fechaFormateada;
        
        switch(formato) {
            case 'corta':
                fechaFormateada = fecha.toLocaleDateString();
                break;
            case 'larga':
                fechaFormateada = fecha.toLocaleDateString('es-ES', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                break;
            case 'hora':
                fechaFormateada = fecha.toLocaleTimeString();
                break;
            default:
                fechaFormateada = fecha.toLocaleString();
        }
        
        res.json({
            success: true,
            formato: formato || 'completo',
            fecha: fechaFormateada
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Error al formatear la fecha"
        });
    }
};

module.exports = {
    obtenerFechaActual,
    obtenerFechaFormateada
};