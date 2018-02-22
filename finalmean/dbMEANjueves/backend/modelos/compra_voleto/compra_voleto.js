var mongoose = require('mongoose');
//var Esquema =	mongoose.Schema;


var EsquemaVentaBoleto=mongoose.Schema({
	usuario 	 :String,
	dni 		   :Number,
	tarjeta		 :Number,
	evento 	   :Number,
	lugar		   :String,
	pago 		   :Number,
	time 		:{ type : Date, default: Date.now }
});
module.exports=mongoose.model("Venta_boleto",EsquemaVentaBoleto,'Venta_boleto');
