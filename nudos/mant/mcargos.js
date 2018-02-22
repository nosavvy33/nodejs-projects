	var mongojs = require('mongojs');
var formidable = require('formidable');
var uri = 'mongodb://localhost:27017/Lab02';
var db= mongojs(uri,["Cargos"]);
var req,res,par;

module.exports={

	controller: function (rq,rs,pm){
		req = rq;
		res = rs;
		par = pm;
	
		if(par.accion == 'MCargos_Listar'){
			listarCargos();
		}else if(par.accion == 'MNuevoCargo'){
			nuevoCargo();
		}else if(par.accion == 'MGrabarNuevoCargo'){
			grabarNuevoCargo();
		}else if(par.accion == 'MEditarCargo'){
			editarCargo();
		}else if(par.accion == 'MGrabarEditarCargo'){
			grabarEditarCargo();
		}else if(par.accion == 'MEliminarCargo'){
			eliminarCargo();
		}else{listarCargos();}
	}
};

function c_listarCargos(err,records){
	if(err){
		console.log("La consulta se perdió, ups!");
		res.end();
		return;
	}

	var html = '<h2>Sueldos segun el cargo</h2>'+
				'<p><a href=/app?accion=MNuevoCargo>Nuevo Cargo</a></p>';
	var i = records.length;

	while(i--){
		html += '<p><b>Nombre: </b>'+
		'<a href=/app?accion=MEditarCargo&xid=' + records[i]._id + '>'+
		records[i].nombre + '</a>' + '</br><b>Sueldo: </b>'+
		records[i].sueldo + '</br><a href=/app?accion=MEliminarCargo&xid='
		+records[i]._id + '>eliminarCargo</a>';
			}

			res.setHeader('Content-Type','text/html');
			res.write(html);
			res.end();
}


function listarCargos(){
	db.Cargos.find().sort({nombre:-1}, c_listarCargos);
}

function nuevoCargo(){
	res.setHeader('Content-Type','text/html');
	var html = '<html><head><title>Nuevo cargo</title></head>'+
	'<body><h1>Nuevo Cargo</h1><form method=POST action=/app?accion=MGrabarNuevoCargo><table border=0><tr><td>Nombre: </td><td><input type=text name=xnom id=xnom size=30></td></tr> <tr><td>Sueldo: </td><td><input type=text name=xsue id=xsue size=30></td></tr> <tr><td></td><td><input type=submit value=Grabar></td></tr></table></form></body></html>';

	res.write( html );
	res.end();
}

function c_grabarNuevoCargo(err,records){
	if(err){
		console.log("La consulta se perdió, ups!");
		res.end();
		return;
	}

	var xid = records[0]._id +1 ;
	console.log(xid);

	var form = new formidable.IncomingForm();
	form.parse(req, function(err,fields){
		var xnom = fields.xnom;
		var xsue = fields.xsue+1;
		db.Cargos.insert({_id:xid, nombre: xnom, sueldo: xsue}, function(){listarCargos();}
	);
	});
}

function grabarNuevoCargo(){
	db.Cargos.find().sort({_id:-1},c_grabarNuevoCargo);
}

function c_editarCargo(){
	if(err){
		console.log("La consulta se perdió, ups!");
		res.end();
		return;
	}

	var xid = record[0]._id*1;
	var xnom = record[0].nombre;
	var xsue = record[0].sueldo;

	res.setHeader('Content-Type','text/html');
	var html = "<html><head><title>Nuevo Cargo</title></head><body>"+
	"<h1>Editar Cargo</h1><form method=post action=/app?accion=MGrabarEditarCargo>"+
	"</form><input type=hidden name=xid id=xid value='"+xid+"'><table border=0>	"+
	"<tr><td>Nombre: </td><td><input type=text name=xnom id=xnom size=30 value='"+xnom+"'>"+
	"</td></tr><tr><td>Sueldo: </td><td><input type=text name=xsue id=xsue size=30 value='"+xsue+"'>"+
	"</td></tr><tr><td></td><td><input type=submit value=Grabar></td></tr></table></body></html>";
	res.write(html);
	res.end();
}

function editarCargo(){
	var xid = par.xid*1;
	console.log(xid);
	db.Cargos.find({_id:xid},c_editarCargo);
}

function c_grabarEditarCargo(){
	listarCargos();
}

function grabarEditarCargo(){
	var form = new formidable.IncomingForm();
	form.parse(req, function(err,fields){
		var xid = fields.xid*1;
		var xnom = fields.xnom;
		var xsue = fields.xsue*1;
		db.Cargos.update({_id:xid}, {nombre: xnom,sueldo: xsue}, c_grabarEditarCargo);
	});
}


function c_eliminarCargo(){
	listarCargos();
}

function eliminarCargo(){
	var xid = par.xid*1;
	console.log(xid);
	db.Cargos.remove({_id:xid},c_eliminarCargo);
}





