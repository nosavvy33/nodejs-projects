var mongojs = require('mongojs')
var formidable = require('formidable');
var uri = 'mongodb://localhost:27017/Lab02';
var db = mongojs(uri, ["Areas"]);
var req, res, par;

module.exports = {
		controller: function (rq, rs, pm) {
			req = rq;
			res = rs;
			par = pm;

			if ( par.accion == 'MListarAreas') {
				listarAreas();
			}
			else if ( par.accion == 'MNuevaArea') {
				nuevaArea();
			}
			else if ( par.accion == 'MGrabarNuevaArea') {
				grabarNuevaArea();
			}
			else if ( par.accion == 'MEditarArea') {
				editarArea();
			}
			else if ( par.accion == 'MGrabarEditarArea') {
				grabarEditarArea();
			}
			else if ( par.accion == 'MEliminarArea') {
				eliminarArea();
			}
			else {
				listarAreas();
			}
		}
};

function c_listarAreas(err, records) {
	if (err) {
		console.log("There was an error executing the database query.");
		res.end();
		return;
	}

	var html = '<h2>Listado de Areas</h2>' +
			   '<p><a href=/app?accion=MNuevaArea>Nueva Area</a></p>';
	var i = records.length;
	
	while(i--) {
		html += '<p><b>Nombre:</b>' +
				'<a href=/app?accion=MEditarArea&xid=' + records[i]._id + '>' +
				records[i].Nombre + '</a>' +
				' <br /><B>Abreviatura:</b>' +
				records[i].Abreviatura +
				' <br /><B>Estado:</b>' +
				records[i].Estado +
				'<br /><a href/app?accion=MEliminarArea&xid=' +
				records[i]._id + '>Eliminar Area </a>';
	}		   

	res.setHeader('Content-Type', 'text/html');
	res.write( html );
	res.end();
}

function listarAreas() {
	db.Areas.find().sort({Nombre:-1}, c_listarAreas);
}

function nuevaArea() {
	res.setHeader('Content-Type', 'text/html');
	var html = `
		<html>
			<head><title>Nueva Area</title></head>
			<body>
			 <H1>Nueva Area</h1><hr/>
			 <form method=post action=/app?accion=MGrabarNuevaArea>
			  <table border=0>
			   <tr><td>Nombre:</td><td><input type=text name=xnom id=xnom size=30></td></tr>
			   <tr><td>Abreviatura:</td><td><input type=text name=xabr id=xabr size=10></td></tr>
			   <tr><td>Estado:</td><td><input type=text name=xest id=xest size=5></td></tr>
			   <tr><td></td><td><input type=submit value=Grabar></td></tr>
			  </table>
			 </form>
			</body>
		</html>
		`

	res.write(html);
	res.end();	
}

function c_grabarNuevaArea(err, records){
	if(err){
		console.log("There was an error executing the database query.");
		res.end();
		return;
	}

	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields){
		var xnom = fields.xnom;
		var xabr = fields.xabr;
		var xest = fields.xest;
		db.Areas.insert({Nombre: xnom, Abreviatura: xabr, Estado: xest}, function() {
			listarAreas();
		});
	});
}

function grabarNuevaArea() {
	db.Areas.find().sort({_id:-1}, c_grabarNuevaArea);
}

function editarArea(){
	var xid = par.xid;
	var ObjectId = mongojs.ObjectId;
	console.log(xid);
	db.Areas.find({_id: ObjectId(xid)}, c_editarArea);
}

function c_editarArea(err, record){
	if(err){
		console.log("Error al modificar en la BD");
		res.end();
		return;
	}	

	var xid = record[0]._id;
	var xnom = record[0].Nombre;
	var xabr = record[0].Abreviatura;
	var xest = record[0].Estado;

	res.setHeader('Content-Type', 'text/html');
var html = '' +
	`<html> \ 
		<head><title>Nueva Area</title></head> \
		<body> \
			<H1>Editar Area</h1><hr/> \
			<form method=post action=/app?accion=MGrabarEditarArea> \
			 <input type=hidden name=xid id=xid value="' + xid + '"> \
			 <table border=0> \
			  <tr><td>Nombre:</td><td><input type=text name=xnom id=xnom \
			  		size=30 value="' + xnom + '"></td></tr> \
			   <tr><td>Abreviatura:</td><td><input type=text name=xabr id=xabr \
			  		size=10 value="' + xabr + '"></td></tr> \
			   <tr><td>Estado:</td><td><input type=text name=xest id=xest \
			  		size=5 value="' + xest + '"></td></tr> \
			   <tr><td></td><td><input type=submit value=Grabar></td></tr> \
			  </table> \
			</form> \
		</body> \
	</html> \	
	`

	res.write(html) ;
	res.end();

}

function c_grabarEditarArea() {
	listarAreas();
}	

function grabarEditarArea() {
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields) {
		var ObjectId = mongojs.ObjectId;
		var xid = fields.xid;
		var xnom = fields.xnom;
		var xabr = fields.xabr;
		var xest = fields.xest;
		db.Areas.update( {_id:ObjectId(xid)}, {Nombre: xnom, Abreviatura:xabr,
			Estado: xest}, c_grabarEditarArea);
	});
}

function c_eliminarArea(){
	listarAreas();
}

function eliminarArea(){
	var xid = par.xid;
	var ObjectId = mongojs.ObjectId;
	db.Areas.remove({_id:ObjectId(xid)}, c_eliminarArea);
}

