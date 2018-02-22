var express = require('express');
var router = express.Router();

router.get('/', c_inicio);
router.get('/about', c_about);

function c_inicio(req, res){
	var monedas = [{nombre: "Sol", pais: "Peru"},
				{nombre : "Euro", pais: "Europa"},
				{nombre : "Dolar", pais : "EEUU"}];


	res. render('inicio',{titulo: "Pagina de inicio por Bruno León",
			nombre : "juan perez",
			grado: "primero de secundaria",
			monedas: monedas});
}


function c_about(req, res){
	res.send("acerca de...");
}

module.exports = router;

