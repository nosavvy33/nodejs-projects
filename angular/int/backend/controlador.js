var Banda = require('./modelos/banda');



exports.getBandas = function(req,res){
	Banda.find({},function(err,bandas){
				if(err){res.send(err);}
				res.json(bandas);
	});
}

exports.postBanda = function(req,res){
	Banda.create({id:req.body.id, nombre:req.body.nombre,fundacion:req.body.fundacion},function(err,bandas){
		if(err){res.send(err);}
		res.send("guardado correctamente");
	});
}


