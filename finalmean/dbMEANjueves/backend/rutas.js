var Controlador	=require('./controlador');
var mainDir	="";



module.exports	={
	principal:function(app){

		//seccion Usuario
		app.get('/api/usuarios',Controlador.getUsuarios);
		app.get('/api/usuarioForMail/:correo',Controlador.getUsuarioForCorreo);


		//seccion Eventos a mostrar
		app.get('/api/eventos',Controlador.getEventos);
		app.get('/api/evento/:id',Controlador.getEventosId);
		app.delete('/api/eliminarEvento/:id',Controlador.deleteEvent);
		app.post('/api/nuevoEvento',Controlador.newEvento);
		app.put('/api/edit/:_id',Controlador.updateEvent)


		//seccion Venta boletos!!
		app.post('/api/nuevoCompra',Controlador.newCompra);
		app.get('/api/historial/:dni',Controlador.getHistorialCompra);
		app.get('/api/historialMail/:usuario',Controlador.getHistorialCompraxMail);


		//obteniendo todas la areas
		app.get('/api/areas',Controlador.getAreas);


		//Crea una nueva area
		app.post('/api/area',Controlador.setArea);

		//Borrar un area
		app.delete('/api/area/:area_id',Controlador.removeArea);


		//Modificar los datos de una area
		app.put('/api/area/:area_id',Controlador.updateArea);

		//A la aplicacion principal
		app.get('/*',function(req,res){
			res.sendFile(mainDir+'/angular/boletos/dist/index.html');
		});
	},
	iniciar: function(mdir){
		mainDir=mdir;
	}
}
