# API de Fecha

Una API simple con Node.js y Express que devuelve la fecha actual en diferentes formatos.

## Instalación

1. Clona el repositorio.
2. Ejecuta `npm install`
3. Ejecuta `npm start` para producción o `npm run dev` para desarrollo.

## Endpoints

- `GET /` - Información de la API.
- `GET /api/fecha` - Fecha actual completa.
- `GET /api/fecha/formateada` - Fecha formateada.
- `GET /api/fecha/health` - Health check (salud de la API).

## Uso

```bash
# Fecha completa
curl http://localhost:3000/api/fecha

# Fecha formateada
curl "http://localhost:3000/api/fecha/formateada?formato=larga"
```

## 📜 Licencia

Este proyecto está bajo la Licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles sobre el uso del código.
