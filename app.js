//Requires
var express = require('express');
var mongoose = require('mongoose');

//Inicializar variables
var app = express();

//conexion
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;

    console.log('Escuchando Base de Datos');
});

//Rutas
app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    });
});

//Escuchar peticiones
app.listen(3000, () => {
    console.log('EXPRESS Escuchando en el puesto 3000 ONLINE');

})