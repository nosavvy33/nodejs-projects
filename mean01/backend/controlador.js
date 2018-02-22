var Area = require('./modelos/area');

exports.getAreas = function(req,res){
	Area.find({},function(err,areas){
		if(err)
			res.send(err);
		res.json(areas);
	});
}

exports.setArea = function(req,res){
	Area.create({Nombre : req.body.Nombre, Abreviatura: req.body.Abreviatura, Estado: req.body.Estado}, function(err, area){
		if(err){
			res.send(err);
		}
		Area.find(function(err,area){
			if(err){res.send(err);}
			res.json(area);
		});

	});
}

exports.updateArea = function(req,res){
	Area.update({_id : req.params.area_id},
		{$set: {Nombre: req.body.Nombre,
				Abreviatura: req.body.Abreviatura,
				Estado: req.body.Estado}},function(err,area){
					if(err){
						res.send(err);
					}
					Area.find(function(err,area){
						if(err){
							res.send(err);
						}
						res.json(area);
					});
				}
		);
	}

exports.removeArea = function(req,res){
	Area.remove({_id: req.params.area_id}, function(err,area){
		if(err){
			res.send(err);
		}

		Area.find(function(err,areas){
			if(err){
				res.send(err);
			}
			res.json(areas);
		});
	});
};
