var mongoose = require('mongoose');

var EsquemaUsuario = mongoose.Schema({
	user : String,
	password : String,
	email : String,
	created_at : String
});

module.exports = mongoose.model("Usuarios", EsquemaUsuario, 'Usuarios');


