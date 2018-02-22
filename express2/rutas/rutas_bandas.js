var mongojs = require('mongojs');
var uri = 'mongodb://localhost:27017/Lab02';
var db = mongojs(uri, ["Bandas"]);
/*
nombre
fundacion
*/
function bandas_listado(req, res){
	db.Bandas.find().sort({nombre:1},function (err,records){
		if(err){
			console.log("error de conexion a mongodb");
			return;
		}
		res.render("m_bandas_listado", {records: records});
	});
}

module.exports = {
	listado : function(req, res){
		bandas_listado(req,res);
	},
	nuevo : function (req, res){
		res.render('m_bandas_nuevo',{});
	},
	grabar_nuevo : function (req,res){
		var xnom = req.body['xnom'];
		var xfun = req.body['xfun'];
		db.Bandas.find().sort({id:-1}, function(err, records){
			if(err){
				console.log("error de conexion");
				res.end();
				return;
			}
			var xid = records[0].id+1;
			db.Bandas.insert({id: xid, nombre: xnom, fundacion: xfun}, function(){
				bandas_listado(req,res);
			});
		});
	},
	editar : function (req, res){
		var xid = req.params.xid*1;
		console.log(xid);
		db.Bandas.find({id: xid}, function(err, records){
			if(err){
				console.log("CONNECTION ERROR");
				res.end();
				return;
			}
			res.render("m_bandas_editar", {banda: records[0]});
		});
	},
	grabar_editar : function(req, res){
		var xid = req.body['xid']*1;
		var xnom = req.body['xnom'];
		var xfun = req.body['xfun'];
		db.Bandas.update({id: xid}, {nombre: xnom, fundacion: xfun}, function(){
			bandas_listado(req, res);
		});
	},
	eliminar : function(req, res){
		var xid = req.params.xid*1;
		db.Bandas.remove({id: xid}, function(){
			bandas_listado(req,res);
		});
	}


}

