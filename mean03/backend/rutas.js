	var Controlador = require('./controlador');
var mainDir = "";

module.exports = {
	principal : function (app) {
		app.get('/api/dos',function(req,res){
			res.sendFile(mainDir + '/angular/dos.html');
		});
		app.get('/api/getthem',Controlador.getUsuarios);
		app.post('/api/usuarios', Controlador.lookforUsuarios);
		app.post('/api/crear', Controlador.createUsuario);
		app.post('/api/delete', Controlador.deleteUsuario);
		//envia a pagina home
		app.get('/', function(req,res){
			res.sendFile(mainDir + '/angular/uno.html');
		});
	},

	iniciar : function (mdir){
		mainDir = mdir;
	}

} 