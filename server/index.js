// Importa el módulo Express
const express = require('express');
const path = require('path');

// Crea una instancia de la aplicación Express
const app = express();

// Define una ruta básica para el inicio que sirve los archivos estáticos de React
app.get("*", (req, res) => {
    res.sendFile('../','build','index.html')
})

// Inicia el servidor en el puerto 3000
const puerto = 3000;
app.listen(puerto, () => {
  console.log(`Servidor Express escuchando en el puerto ${puerto}`);
});
