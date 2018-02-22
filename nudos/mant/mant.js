var mcargos = require('./mcargos');
var mareas = require('./mareas');
var noms = require('./nombres');
var bands = require('./bandas');

var req, res, pm;

module.exports=
{
	inicioMant : function(rq,rs){
		req = rq;
		res = rs;
		res.write('<html>'+'<head>   <meta charset=UTF-8><title>Mantenimientos</title></head>'+
		'<body>'+
		'<h1>Mantenimiento</h1'+
		'<ul><p><li><a href=/app?accion=MAreas>Areas</a></li></p>'+
		'<li><a href=/app?accion=MCargos>Cargos</a></li></ul>'+
		'<p><li><a href=/app?accion=MNombres>Nombres</a></li></p>'+
		'<p><li><a href=/app?accion=MLibros>Libros</a></li></p>'+
		'<p><li><a href=/app?accion=MBandas>Bandas</a></li></p></ul>'+
		'</body></html>');
	},
	controller: function(rq,rs,pm){
		req = rq;
		res = rs;
		par = pm;
		if(par.accion.indexOf('Cargo')>0){
			/*res.setHeader('Content-Type','text/html');
			res.write('<h1>Mantenimiento de cargos</h1>');
			res.end();*/
			mcargos.controller(req,res,par);
		}else if(par.accion.indexOf('Area')>0){
			/*res.setHeader('Content-Type','text/html');
			res.write('<h1>Mantenimiento de areas</h1>');
			res.end();*/
			mareas.controller(req,res,par);
		}else if(par.accion.indexOf('Nombres')>0){
			noms.controller(req,res,par);
		}else if(par.accion.indexOf('Bandas')>0){
			bands.controller(req,res,par);
		}else if(par.accion.indexOf('Libros')>0){
			console.log("libros");
		}
	}
}