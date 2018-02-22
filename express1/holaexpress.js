/*var express = require('express');
var app = express();

app.get('/', callback_inicio);
app.get('/saludo', callback_hola);
app.get('/despedida', callback_despedida);

function callback_inicio(request, response){
	response.send('Bruno León, Bienvenido una aplicacion NODE - EXPRESS');
}

function callback_hola(request, response){
	response.send('hola te saluda EXPRESS, Bruno León');
}

function callback_despedida(request, response){
	response.send('Hasta la vista, EXPRESS, Bruno León');
}

function callback_server(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("aplicacion de ejemplo escuchando en http://%s:%s",host,port);
}


var server = app.listen(8080, callback_server);*/