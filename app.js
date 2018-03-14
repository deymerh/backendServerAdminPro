//Requires
var express = require('express');
var mongoose = require('mongoose');
//Libreria
var bodyParser = require('body-parser');

//Inicializar variables
var app = express();

//Body Parser
// aplicación parse / x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');

//conexion
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;

    console.log('Escuchando Base de Datos');
});


//Rutas
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);



//Escuchar peticiones
app.listen(3000, () => {
    console.log('EXPRESS Escuchando en el puesto 3000 ONLINE');
});