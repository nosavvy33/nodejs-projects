var http = require('http');
var url = require('url');
var str = require('string');
var mantenimientos = require('./mant/mant');
var server = http.createServer(callback_handlerHttp);


var req,res,par;

function callback_handlerHttp(request, response){
req = request;
res = response;
par = url.parse(req.url, true).query;
var accion = par.accion;

if (accion == undefined){
	inicio();
}else if (accion == 'Mantenimientos'){
	Mantenimientos();
}else if(accion == 'Procesos'){
	Procesos();
}else if(accion == 'Reportes'){
	Reportes();
}else if(accion.charAt(0)== 'M'){
	mantenimientos.controller(req,res,par);
}else{
inicio();
}
}

function Mantenimientos(){
	/*res.setHeader('Content-Type','text/html');
	res.write('<h1>Mantenimientos</h1>');
	res.end();*/
	mantenimientos.inicioMant(req,res);
}

function Procesos(){
	res.setHeader('Content-Type','text/html');
	res.write('<h1>Procesos</h1>');
	res.end();
}

function Reportes(){
	res.setHeader('Content-Type','text/html');
	res.write('<h1>Reportes</h1>');
	res.end();
}

function inicio(){
	res.setHeader('Content-Type','text/html');
	res.write('<h1>Pagina principal de la aplicacion</h1>');
	res.write('<ul><p><li><a href=/app?accion=Mantenimientos>Mantenimientos</a></li></p>'+
		'<ul><p><li><a href=/app?accion=Procesos>Procesos</a></li></p>'+
		'<ul><p><li><a href=/app?accion=Reportes>Reportes</a></li></p>');
	res.end();
}

console.log('Server initialized on port 8080');
server.listen(8080);