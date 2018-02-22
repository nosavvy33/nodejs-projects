var mongoose = require('mongoose');
var Esquema =	mongoose.Schema;

/*
var EsquemaPrecio=new Esquema({
	norte:String
});*/


let EsquemaUsuario=new Esquema({
	_id		:String,
	dni 	:String,
	nombre 	:String,
	paterno :String,
	materno :String,
	correo 	:String,
	password:String,
	tarjeta	:String

});
module.exports=mongoose.model("Usuario",EsquemaUsuario,'Usuario');