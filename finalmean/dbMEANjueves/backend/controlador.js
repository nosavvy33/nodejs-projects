var Area =	require('./modelos/area');
var Usuario =require('./modelos/usuario');
var Evento=require('./modelos/Evento/evento');
var Venta_boleto=require('./modelos/compra_voleto/compra_voleto');


//obteniendo de usuario
exports.getUsuarioForCorreo=function (req,res) {
	Usuario.find({correo:req.params.correo},{_id:0,correo:1,password:1,dni:1},function(err,usuario){
		if(err)
			res.send(err);
		res.json(usuario);

	})
}
exports.getUsuarios=function(req,res){
	Usuario.find({},function(err,usuarios){
		if(err)
			res.send(err);
		res.json(usuarios);
	});
}
//Seccion eventos
exports.getEventos=function(req,res){
	Evento.find({},function(err,eventos){
		if(err)
			res.send(err);
		res.json(eventos);
	});
}
exports.getEventosId=function(req,res){
	Evento.find({_id:req.params.id},function(err,evento){
		if(err)
			res.send(err);
		res.json(evento);
	});
}
exports.deleteEvent=function(req,res){
	Evento.remove({_id : req.params.id}, function(err , evento){
        if(err)
            res.send(err);
        Evento.find(function(err,evento){
            if(err)
                res.send(err);
            res.json(evento);
        });
    });
}
exports.newEvento = function(req , res){
	Evento.findOne({},{},{sort:{"_id":-1}},function(err,eventocount){
		//console.log(eventocount._id);
		var count =eventocount._id;
		Evento.create({
			_id									: count+1,
			local               : req.body.local,
			visitante           : req.body.visitante,
			estadio             : req.body.estadio,
			fecha               : req.body.fecha,
			Precio 							: req.body.Precio
		}, function(err,evento){
			if(err)
			res.send(err);
			Evento.find(function(err,evento){
				if(err)
				res.send(err);
				res.json(evento);
			});
		});
	});
}
exports.updateEvent = function(req ,res){
    Evento.update({_id : req.params._id},
        {$set : {
            local               : req.body.local,
            visitante           : req.body.visitante,
            estadio             : req.body.estadio,
            fecha               : req.body.fecha,
            Precio 							: req.body.Precio
            }
        },function(err , evento){
            if(err)
                res.send(err);
            Evento.find(function(err , evento){
                if(err)
                    res.send(err);
                res.json(evento);
            });
        });
}

//Seccion COmpra boletos!!!
exports.newCompra=function(req,res){
	console.log(req.body);
	Venta_boleto.create({
		usuario 	:req.body.usuario,
		dni 			:req.body.dni,
		tarjeta 	:req.body.tarjeta,
		evento 		:req.body.evento,
		lugar 		:req.body.lugar,
		pago 			:req.body.pago},
		function (err,newEvent){
			if(err)
				res.send(err);
			Venta_boleto.find(function (err,newEvent) {
				if(err)
					res.send(err);
				res.json(newEvent);
			});
		});
}
exports.getHistorialCompra=function(req,res){
	Venta_boleto.find({dni:req.params.dni},function(err,historial){
		if(err)
			res.send(err);
		res.json(historial);
	});
}

exports.getHistorialCompraxMail=function(req,res){
	Venta_boleto.find({usuario:req.params.usuario},function(err,historial){
		if(err)
			res.send(err);
		res.json(historial);
	});
}



/*exports.setArea=function(req,res){
	Area.create({Nombre		:req.body.Nombre,
				Abreviatura	:req.body.Abreviatura,
				Estado		:req.body.Estado},function(err,area){
					if(err)
						res.send(err);
					Area.find(function(err,area){
						if(err)
							res.send(err);
						res.json(area);
					});
				});
}*/




//https://www.youtube.com/watch?v=ZHVJVQzHv5Q&list=RDMMuaKc_zmtWqo









//Obteniendo todas la areas

exports.getAreas=function(req,res){
	Area.find({},function(err,areas){
		if(err)
			res.send(err);
		res.json(areas);
	});
}

//Adicionando un nuevo objeto Area en la base de datos

exports.setArea=function(req,res){
	Area.create({Nombre		:req.body.Nombre,
				Abreviatura	:req.body.Abreviatura,
				Estado		:req.body.Estado},function(err,area){
					if(err)
						res.send(err);
					Area.find(function(err,area){
						if(err)
							res.send(err);
						res.json(area);
					});
				});
}

//Modifica un objeto area de la base  de datos
exports.updateArea	=function(req,res){
	Area.update({_id:req.params.area_id},
		{$set:{Nombre	:req.body.Nombre,
			Abreviatura	:req.body.Abreviatura,
			Estado		:req.body.Estado}},function(err,area){
				if(err)
					res.send(err);
				Area.find(function(err,area){
					if(err)
						res.send(err);
					res.json(area);
				});
			});
}

//Elimina un objeto Area de la base de datos
exports.removeArea=function(req,res){
	Area.remove({_id:req.params.area_id},function(err,area){
		if(err)
			res.send(err);
		Area.find(function(err,areas){
			if(err)
				res.send(err);
			res.json(areas);
		});
	});
}
