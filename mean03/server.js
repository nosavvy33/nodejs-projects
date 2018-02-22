//inicializacion de modulos
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var rutas = require('./backend/rutas.js');


//configuracion
mongoose.connect('mongodb://localhost:27017/Lab02',{
	useMongoClient: true
});
app.use(express.static(__dirname + '/angular'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//carga de rutas
rutas.iniciar(__dirname);
rutas.principal(app);

//inicia el servidor
app.listen(3000);
console.log("escucha en el puerto 3000");

