# ⏰ API Clock

> API REST sencilla y ligera para consultar la fecha y la hora actuales en distintos formatos.

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**API Clock** es un servicio web desarrollado con Node.js y Express que proporciona la fecha y hora actuales mediante endpoints JSON. Incluye respuestas con formatos ISO, local, legible, UTC y timestamp, además de una ruta de salud para comprobar rápidamente la disponibilidad del servicio.

---

## 📋 Tabla de contenidos

- [Características](#-características)
- [Tecnologías utilizadas](#-tecnologías-utilizadas)
- [Requisitos previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Ejecución](#-ejecución)
- [Uso de la API](#-uso-de-la-api)
- [Endpoints](#endpoints)
- [Respuestas de ejemplo](#respuestas-de-ejemplo)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Configuración](#-configuración)
- [Manejo de errores](#-manejo-de-errores)
- [Contribuciones](#-contribuciones)
- [Licencia](#-licencia)

## ✨ Características

- Consulta de la fecha y hora actuales en múltiples representaciones.
- Formatos ISO 8601, local, legible, UTC y timestamp Unix.
- Endpoint para obtener la fecha en formato corto, largo o únicamente la hora.
- Endpoint de health check para monitorización.
- Respuestas estructuradas en formato JSON.
- CORS habilitado para facilitar el consumo desde aplicaciones frontend.
- Middleware centralizado para rutas inexistentes y errores internos.
- Configuración del puerto mediante la variable de entorno `PORT`.

## 🛠️ Tecnologías utilizadas

- **[Node.js](https://nodejs.org/)** — Entorno de ejecución para JavaScript en el servidor.
- **[Express](https://expressjs.com/)** — Framework utilizado para crear la API REST y definir sus rutas.
- **[CORS](https://www.npmjs.com/package/cors)** — Middleware para permitir solicitudes desde distintos orígenes.
- **Nodemon** — Herramienta de desarrollo que reinicia automáticamente el servidor al detectar cambios.
- **JavaScript** — Lenguaje principal del proyecto.

## ✅ Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) 18 o una versión superior recomendada.
- npm, incluido normalmente con Node.js.
- Git, si deseas clonar el repositorio.

Puedes comprobar las versiones instaladas con:

```bash
node --version
npm --version
```

## 📦 Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/MarioSi3ri/apiclock.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd apiclock
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## ▶️ Ejecución

### Modo producción

Inicia el servidor con:

```bash
npm start
```

Por defecto, la API estará disponible en:

```text
http://localhost:3000
```

### Modo desarrollo

Para utilizar Nodemon y reiniciar automáticamente el servidor cuando cambie el código:

```bash
npm run dev
```

Al iniciar correctamente, el servidor mostrará en la consola las URLs disponibles.

## 🌐 Uso de la API

La API devuelve todas sus respuestas en formato JSON. Puedes consumirla desde un navegador, una herramienta como Postman o cualquier cliente HTTP.

### Endpoint raíz

```http
GET /
```

Devuelve información general de la API y un listado de sus endpoints principales.

Ejemplo:

```bash
curl http://localhost:3000/
```

### Fecha actual completa

```http
GET /api/fecha
```

Devuelve la fecha actual en diferentes formatos junto con sus componentes separados.

Ejemplo:

```bash
curl http://localhost:3000/api/fecha
```

### Fecha formateada

```http
GET /api/fecha/formateada
```

Permite seleccionar el formato mediante el parámetro de consulta `formato`.

| Valor de `formato` | Descripción |
| --- | --- |
| `corta` | Fecha local en formato corto. |
| `larga` | Fecha completa en español, incluyendo día de la semana y mes. |
| `hora` | Hora local actual. |
| Sin valor | Fecha y hora local completas. |

Ejemplos:

```bash
# Fecha corta
curl "http://localhost:3000/api/fecha/formateada?formato=corta"

# Fecha larga en español
curl "http://localhost:3000/api/fecha/formateada?formato=larga"

# Solo la hora
curl "http://localhost:3000/api/fecha/formateada?formato=hora"

# Formato completo por defecto
curl http://localhost:3000/api/fecha/formateada
```

### Health check

```http
GET /api/fecha/health
```

Comprueba que la API está funcionando y devuelve un timestamp de la comprobación.

Ejemplo:

```bash
curl http://localhost:3000/api/fecha/health
```

## 📄 Respuestas de ejemplo

### `GET /api/fecha`

```json
{
  "success": true,
  "fecha": {
    "iso": "2026-10-23T12:34:56.789Z",
    "local": "23/10/2026, 14:34:56",
    "legible": "Fri Oct 23 2026 14:34:56 GMT+0200 (Central European Summer Time)",
    "timestamp": 1792758896789,
    "utc": "Fri, 23 Oct 2026 12:34:56 GMT"
  },
  "componentes": {
    "año": 2026,
    "mes": 10,
    "dia": 23,
    "horas": 14,
    "minutos": 34,
    "segundos": 56
  }
}
```

> Los valores de fecha, hora, zona horaria y timestamp cambiarán en cada solicitud y dependen de la configuración del entorno donde se ejecuta la API.

### `GET /api/fecha/formateada?formato=larga`

```json
{
  "success": true,
  "formato": "larga",
  "fecha": "viernes, 23 de octubre de 2026"
}
```

### `GET /api/fecha/health`

```json
{
  "success": true,
  "mensaje": "API de Fecha funcionando correctamente",
  "timestamp": "2026-10-23T12:34:56.789Z"
}
```

## 📁 Estructura del proyecto

```text
apiclock/
├── src/
│   ├── app.js                      # Configuración e inicio de la aplicación
│   ├── controllers/
│   │   └── fechaController.js      # Lógica para obtener y formatear fechas
│   ├── middleware/
│   │   └── errorHandler.js         # Gestión de errores y rutas inexistentes
│   └── routes/
│       └── fechaRoutes.js          # Definición de los endpoints de fecha
├── .gitignore
├── LICENSE
├── package.json
└── README.md
```

## ⚙️ Configuración

El puerto predeterminado es `3000`. Puedes utilizar otro puerto definiendo la variable de entorno `PORT`.

### Linux y macOS

```bash
PORT=4000 npm start
```

### Windows PowerShell

```powershell
$env:PORT=4000; npm start
```

Con esta configuración, la API estará disponible en `http://localhost:4000`.

## 🚨 Manejo de errores

Si solicitas una ruta que no existe, la API responderá con el estado HTTP `404`:

```json
{
  "success": false,
  "error": "Endpoint no encontrado",
  "mensaje": "La ruta /ruta-inexistente no existe"
}
```

Los errores internos del servidor se responden con el estado HTTP `500` y un mensaje JSON controlado.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para proponer cambios:

1. Crea un fork del repositorio.
2. Crea una rama para tu mejora:

   ```bash
   git checkout -b feature/nueva-mejora
   ```

3. Realiza tus cambios y añade pruebas si corresponde.
4. Confirma los cambios:

   ```bash
   git commit -m "feat: describir la nueva mejora"
   ```

5. Sube la rama y abre un Pull Request.

## 📜 Licencia

Este proyecto se distribuye bajo la **Licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para conocer los términos completos.

---

Desarrollado por [Mario Sierra Neri](https://github.com/MarioSi3ri) · [Ver repositorio](https://github.com/MarioSi3ri/apiclock)
