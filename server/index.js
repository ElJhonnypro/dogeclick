// Importa el módulo Express
const express = require('express');
const path = require('path');

// Crea una instancia de la aplicación Express
const app = express();

// Define una ruta básica para el inicio que sirve los archivos estáticos de React
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,'../','build','index.html'))
})

app.use(express.static(path.join(__dirname, '../', 'build', 'index.html')))
console.log(path.join(__dirname, '../', 'build'))
app.listen(3000, () => {
  console.log(`Servidor Express`);
});