	var Controlador = require('./controlador');
var mainDir = "";

module.exports = {
	principal : function (app) {
		//eliminar areas
		app.delete('/api/estadio/:area_id',Controlador.removeEstadio);
		//mopdificar datos
		app.put('/api/estadio', Controlador.updateEstadio);
		//recupera todos los registros en Area
		app.get('/api/usuarios', Controlador.getUsuarios);
		//crea una nueva area
		app.post('/api/estadio', Controlador.setEstadio);
		//envia a pagina home
		app.get('*', function(req,res){
			res.sendFile(mainDir + '/angular/index.html');
		});
	},

	iniciar : function (mdir){
		mainDir = mdir;
	}

} 