var Estadio = require('./modelos/estadio');

exports.getEstadios = function(req,res){
	Estadio.find({},function(err,estadios){
		if(err)
			res.send(err);
		res.json(estadios);
	});
}

exports.setEstadio = function(req,res){
	Estadio.create({nombre : req.body.nombre, capacidad: req.body.capacidad, localizacion: req.body.localizacion, estado: req.body.estado}, function(err, estadio){
		if(err){
			res.send(err);
		}
		Estadio.find(function(err,estadio){
			if(err){res.send(err);}
			res.json(estadio);
		});

	});
}

exports.updateEstadio = function(req,res){
	Estadio.update({_id : req.params.estadio_id},
		{$set: {nombre: req.body.nombre,
				capacidad: req.body.capacidad,
				localizacion: req.body.localizacion,
				estado: req.body.estado}},function(err,estadio){
					if(err){
						res.send(err);
					}
					Estadio.find(function(err,estadio){
						if(err){
							res.send(err);
						}
						res.json(estadio);
					});
				}
		);
	}

exports.removeEstadio = function(req,res){
	Estadio.remove({_id: req.params.estadio_id}, function(err,estadio){
		if(err){
			res.send(err);
		}

		Estadio.find(function(err,estadios){
			if(err){
				res.send(err);
			}
			res.json(estadios);
		});
	});
};
