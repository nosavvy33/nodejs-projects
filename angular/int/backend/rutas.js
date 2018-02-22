	var Controlador = require('./controlador');
var mainDir = "";

module.exports = {
	principal : function (app) {
		app.get('/api/getthem',Controlador.getBandas);
		app.post('/api/post',Controlador.postBanda);
		//envia a pagina home
		app.get('/*', function(req,res){
			res.sendFile(mainDir + '/resting/dist/index.html');
		});
	},

	iniciar : function (mdir){
		mainDir = mdir;
	}

} 