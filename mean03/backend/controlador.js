var Usuario = require('./modelos/usuario');

/*exports.getUsuarios = function(req,res){
	Usuario.find({},function(err,usuarios){
		if(err)
			res.send(err);
		res.json(usuarios);
	});
}*/
exports.getUsuarios = function(req,res){
	Usuario.find({},function(err,usuarios){
				if(err){res.send(err);}
				res.json(usuarios);
	});
}

exports.lookforUsuarios = function(req,res){
	Usuario.find({user: req.body.user, password: req.body.password},function(err,usuario){
		if(err){
			res.send(err);
		}
		//res.send("hola mundo "+usuario);
		var count = Object.keys(usuario).length;
		if(count > 0 ){
			res.redirect('/api/dos');
			//res.send("localhost:3000/dos");
		}
		}
	);
}

exports.createUsuario = function(req, res){
	Usuario.create({user: req.body.user, password: req.body.password, email: req.body.email},function(err, usuario){
		if(err){res.send(err);}
		res.send(usuario.user);
	});

}

exports.deleteUsuario = function(req,res){
	Usuario.remove({user: req.body.user, password: req.body.password, email:req.body.email},function(err,usuario){
				if(err){res.send(err);}
				res.send("well-done");
	});
}

