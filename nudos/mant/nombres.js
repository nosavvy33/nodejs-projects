	var mongojs = require('mongojs');
var formidable = require('formidable');
var uri = 'mongodb://localhost:27017/Lab02';
var db= mongojs(uri,["Nombres"]);
var req,res,par;

module.exports={

	controller: function (rq,rs,pm){
		req = rq;
		res = rs;
		par = pm;
	
		if(par.accion == 'MNombres'){
			listarnombres();
		}else if(par.accion == 'MNuevoNombre'){
			nuevonombre();
		}else if(par.accion == 'MGrabarNuevoNombre'){
			grabarnuevonombre();
		}else if(par.accion == 'MEditarNombre'){
			editarnombre();
		}else if(par.accion == 'MGrabarEditarNombre'){
			grabareditarnombre();
		}else if(par.accion == 'MEliminarNombre'){
			eliminarnombre();
		}else{listarnombres();}
	}
};

function c_listarnombres(err,records){
	if(err){
		console.log("La consulta se perdió, ups!");
		res.end();
		return;
	}

	var html = '<h2>Nombres en orden alfabético </h2>'+
				'<p><a href=/app?accion=MNuevoNombre>Nuevo Nombre</a></p>';
	var i = records.length;

	while(i--){
		html += '<p><b>Nombre: </b>'+
		'<a href=/app?accion=MEditarNombre&xid=' + records[i]._id + '>'+
		records[i].nombre + '</a>' + '</br><b>apellido: </b>'+
		records[i].apellido + '</br><a href=/app?accion=MEliminarNombre&xid='
		+records[i]._id + '>eliminarnombre</a>';
			}

			res.setHeader('Content-Type','text/html');
			res.write(html);
			res.end();
}


function listarnombres(){
	db.Nombres.find().sort({nombre:-1}, c_listarnombres);
}

function nuevonombre(){
	res.setHeader('Content-Type','text/html');
	var html = '<html><head><title>Nuevo Nombre</title></head>'+
	'<body><h1>Nuevo Nombre</h1><form method=POST action=/app?accion=MGrabarNuevonombre><table border=0><tr><td>Nombre: </td><td><input type=text name=xnom id=xnom size=30></td></tr> <tr><td>Apellido: </td><td><input type=text name=xape id=xape size=30></td></tr> <tr><td>DNI: </td><td><input type=text name=xdni id=xdni size=8></td></tr><tr><td></td><td><input type=submit value=Grabar></td></tr></table></form></body></html>';

	res.write( html );
	res.end();
}

function c_grabarnuevonombre(err,records){
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
		var xape = fields.xape+1;
		var xdni = fields.xdni;
		db.Cargos.insert({_id:xid, nombre: xnom, apellido: xape, dni: xdni}, function(){listarnombres();}
	);
	});
}

function grabarnuevonombre(){
	db.Nombres.find().sort({_id:-1},c_grabarnuevonombre);
}

function c_editarnombre(){
	if(err){
		console.log("La consulta se perdió, ups!");
		res.end();
		return;
	}

	var xid = record[0]._id*1;
	var xnom = record[0].nombre;
	var xape = record[0].apellido;
	var xdni = record[0].dni;

	res.setHeader('Content-Type','text/html');
	var html = "<html><head><title>Nuevo Nombre</title></head><body>"+
	"<h1>Editar Cargo</h1><form method=post action=/app?accion=MGrabarEditarNombre>"+
	"</form><input type=hidden name=xid id=xid value='"+xid+"'><table border=0>	"+
	"<tr><td>Nombre: </td><td><input type=text name=xnom id=xnom size=30 value='"+xnom+"'>"+
	"</td></tr><tr><td>Apellido: </td><td><input type=text name=xape id=xape size=30 value='"+xape+"'>"+
	"</td></tr><tr><td>DNI: </td><td><input type=text name=xdni id=xdni size=8 value='"+xdni+"'>"+
	"</td></tr><tr><td></td><td><input type=submit value=Grabar></td></tr></table></body></html>";
	res.write(html);
	res.end();
}

function editarnombre(){
	var xid = par.xid*1;
	console.log(xid);
	db.Nombres.find({_id:xid},c_editarnombre);
}

function c_grabareditarnombre(){
	listarnombres();
}

function grabareditarnombre(){
	var form = new formidable.IncomingForm();
	form.parse(req, function(err,fields){
		var xid = fields.xid*1;
		var xnom = fields.xnom;
		var xape = fields.xape;
		var xdni = fields.xdni;
		db.Nombres.update({_id:xid}, {nombre: xnom,apellido: xape, dni: xdni}, c_grabareditarnombre);
	});
}


function c_eliminarnombre(){
	listarnombres();
}

function eliminarnombre(){
	var xid = par.xid*1;
	console.log(xid);
	db.Nombres.remove({_id:xid},c_eliminarnombre);
}





