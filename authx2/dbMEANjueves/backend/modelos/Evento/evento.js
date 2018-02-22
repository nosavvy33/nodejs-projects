var mongoose = require('mongoose');
var Esquema =	mongoose.Schema;
/*
var EsquemaPrecio=new Esquema({
	norte:String
});*/
var EsquemaPrecio=new Esquema({
	_id				:Number,//borra esta mierda si ya sabes que -_-
	norte			:Number,
	sur 			:Number,
	oriente		:Number,
	occidente	:Number
});


let EsquemaEvento=new Esquema({
	_id					:Number,//este tambien ten cuidado con esto, el modelado tiene que se lo mas preciso posible respetando los tipo de datos sino gg
	local 			:String,
	visitante 	:String,
	estadio 		:String,
	fecha 			:String,
	Precio 			:[EsquemaPrecio]
});
module.exports=mongoose.model("Evento",EsquemaEvento,'Evento');
