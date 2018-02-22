var mongoose = require('mongoose');

var EsquemaEstadio = mongoose.Schema({
	nombre : String,
	capacidad : String, 
	localizacion : String,
	estado: String
});

module.exports = mongoose.model("Estadios", EsquemaEstadio, 'Estadios');


