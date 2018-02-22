var mongojs = require('mongojs');
var uri = 'mongodb://localhost:27017/Lab02';
var db = mongojs(uri, ["Areas"]);

function areas_listado(req, res){
	db.Areas.find().sort({Nombre:1},function (err,records){
		if(err){
			console.log("error de conexion a mongodb");
			return;
		}
		res.render("m_areas_listado", {records: records});
	});
}

module.exports = {
	listado : function(req, res){
		areas_listado(req,res);
	},
	nuevo : function (req, res){
		res.render('m_areas_nuevo',{});
	},
	grabar_nuevo : function (req,res){
		var xnom = req.body['xnom'];
		var xabr = req.body['xabr'];
		var xest = req.body['xest'];
		db.Areas.find().sort({_id:-1}, function(err, records){
			if(err){
				console.log("error de conexion");
				res.end();
				return;
			}
			db.Areas.insert({Nombre: xnom, Abreviatura: xabr, Estado: xest}, function(){
				areas_listado(req,res);
			});
		});
	},
	editar : function (req, res){
		var xnom = req.params.xnom;
		console.log(xnom);
		db.Areas.find({Nombre: xnom}, function(err, records){
			if(err){
				console.log("CONNECTION ERROR");
				res.end();
				return;
			}
			res.render("m_areas_editar", {area: records[0]});
		});
	},
	grabar_editar : function(req, res){
		var xnom = req.body['xnom'];
		var xabr = req.body['xabr'];
		var xest = req.body['xest'];
		db.Areas.update({Nombre: xnom}, {Nombre: xnom, Abreviatura: xabr, Estado: xest}, function(){
			areas_listado(req, res);
		});
	},
	eliminar : function(req, res){
		var xnom = req.params.xnom;
		db.Areas.remove({Nombre: xnom}, function(){
			areas_listado(req,res);
		});
	}


}

