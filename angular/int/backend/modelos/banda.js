var mongoose = require('mongoose');

var EsquemaBanda = mongoose.Schema({
	id : String,
	nombre : String,
	fundacion : String
});

module.exports = mongoose.model("Bandas", EsquemaBanda, 'Bandas');

