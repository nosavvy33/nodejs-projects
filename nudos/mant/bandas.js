	var mongojs = require('mongojs');
var formidable = require('formidable');
var uri = 'mongodb://localhost:27017/Lab02';
var db= mongojs(uri,["Bandas"]);
var req,res,par;

module.exports={

	controller: function (rq,rs,pm){
		req = rq;
		res = rs;
		par = pm;
	
		if(par.accion == 'MBandas'){
			listarbandas();
		}else if(par.accion == 'MNuevaBanda'){
			nuevabanda();
		}else if(par.accion == 'MGrabarNuevaBanda'){
			grabarnuevabanda();
		}else if(par.accion == 'MEditarBanda'){
			editarbanda();
		}else if(par.accion == 'MGrabarEditarBanda'){
			grabareditarbanda();
		}else if(par.accion == 'MEliminarBanda'){
			eliminarbanda();
		}else{listarbandas();}
	}
};

function c_listarbandas(err,records){
	if(err){
		console.log("La consulta se perdió, ups!");
		res.end();
		return;
	}

	var html = '<h2>Nombres en orden alfabético </h2>'+
				'<p><a href=/app?accion=MNuevaBanda>Nuevo Nombre</a></p>';
	var i = records.length;

	while(i--){
		html += '<p><b>Nombre: </b>'+
		'<a href=/app?accion=MEditarBanda&xid=' + records[i]._id + '>'+
		records[i].nombre + '</a>' + '</br><b>fundacion: </b>'+
		records[i].fundacion + '</br><a href=/app?accion=MEliminarBanda&xid='+
		records[i]._id + '>eliminarbanda</a>';
			}

			res.setHeader('Content-Type','text/html');
			res.write(html);
			res.end();
}


function listarbandas(){
	db.Bandas.find().sort({nombre:-1}, c_listarbandas);
}

function nuevabanda(){
	res.setHeader('Content-Type','text/html');
	var html = '<html><head><title>Nuevo Nombre</title></head>'+
	'<body><h1>Nuevo Nombre</h1><form method=POST action=/app?accion=MGrabarNuevaBanda><table border=0><tr><td>Nombre: </td><td><input type=text name=xnom id=xnom size=30></td></tr> <tr><td>fundacion: </td><td><input type=text name=xfun id=xfun size=30></td></tr> <tr><td>DNI: </td><td><input type=text name=xmas id=xmas size=8></td></tr><tr><td></td><td><input type=submit value=Grabar></td></tr></table></form></body></html>';

	res.write( html );
	res.end();
}

function c_grabarnuevabanda(err,records){
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
		var xfun = fields.xfun+1;
		var xmas = fields.xmas;
		db.Cargos.insert({_id:xid, nombre: xnom, fundacion: xfun, master: xmas}, function(){listarbandas();}
	);
	});
}

function grabarnuevabanda(){
	db.Bandas.find().sort({_id:-1},c_grabarnuevabanda);
}

function c_editarbanda(){
	if(err){
		console.log("La consulta se perdió, ups!");
		res.end();
		return;
	}

	var xid = record[0]._id*1;
	var xnom = record[0].nombre;
	var xfun = record[0].fundacion;
	var xmas = record[0].dni;

	res.setHeader('Content-Type','text/html');
	var html = "<html><head><title>Nuevo Nombre</title></head><body>"+
	"<h1>Editar Cargo</h1><form method=post action=/app?accion=MGrabarEditarBanda>"+
	"</form><input type=hidden name=xid id=xid value='"+xid+"'><table border=0>	"+
	"<tr><td>Nombre: </td><td><input type=text name=xnom id=xnom size=30 value='"+xnom+"'>"+
	"</td></tr><tr><td>fundacion: </td><td><input type=text name=xfun id=xfun size=30 value='"+xfun+"'>"+
	"</td></tr><tr><td>Mayor Album: </td><td><input type=text name=xmas id=xmas size=8 value='"+xmas+"'>"+
	"</td></tr><tr><td></td><td><input type=submit value=Grabar></td></tr></table></body></html>";
	res.write(html);
	res.end();
}

function editarbanda(){
	var xid = par.xid*1;
	console.log(xid);
	db.Bandas.find({_id:xid},c_editarbanda);
}

function c_grabareditarbanda(){
	listarbandas();
}

function grabareditarbanda(){
	var form = new formidable.IncomingForm();
	form.parse(req, function(err,fields){
		var xid = fields.xid*1;
		var xnom = fields.xnom;
		var xfun = fields.xfun;
		var xmas = fields.xmas;
		db.Nombres.update({_id:xid}, {nombre: xnom,fundacion: xfun, master: xmas}, c_grabareditarbanda);
	});
}


function c_eliminarbanda(){
	listarbandas();
}

function eliminarbanda(){
	var xid = par.xid*1;
	console.log(xid);
	db.Bandas.remove({_id:xid},c_eliminarbanda);
}





