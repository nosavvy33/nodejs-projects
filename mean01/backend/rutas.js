	var Controlador = require('./controlador');
var mainDir = "";

module.exports = {
	principal : function (app) {
		//eliminar areas
		app.delete('/api/area/:area_id',Controlador.removeArea);
		//mopdificar datos
		app.put('/api/area', Controlador.updateArea);
		//recupera todos los registros en Area
		app.get('/api/areas', Controlador.getAreas);
		//crea una nueva area
		app.post('/api/area', Controlador.setArea);
		//envia a pagina home
		app.get('*', function(req,res){
			res.sendFile(mainDir + '/angular/index.html');
		});
	},

	iniciar : function (mdir){
		mainDir = mdir;
	}

} 