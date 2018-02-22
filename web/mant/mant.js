var mcargos = require('./mcargos');
var mareas = require('./mareas');
var req, res, pm;

module.exports =
{
	inicioMant: function (rq, rs){
		req = rq;
		res = rs;
		rs.write('<html>' +
			'	<head><title>Mantenimientos</title></head> ' +
			'	<body> ' +
			'		<h1>Mantenimiento - JB</h1> ' +
			'		<ul><li><a href=/app?accion=MAreas>Areas</a></li></p> ' +
			'			<li><a href=/app?accion=MCargos>Cargos</a></li></ul> ' +
			' 	</body> ' +
			'</html>');

	},

	controller: function(rq, rs, pm) {
		req = rq;
		res = rs;
		par = pm;

		if (par.accion.indexOf('Cargo') > 0) {
			mcargos.controller(req, res, par);
			/* res.setHeader('Content-Type', 'text/html');
			res.write('<h1>Mantenimiento de cargos</h1>');
			res.end(); */
		}
		else if (par.accion.indexOf('Area') > 0) {
			mareas.controller(req, res, par);
			/*res.setHeader('Content-Type', 'text/html');
			res.write('<h1>Mantenimiento de areas</h1>');
			res.end();*/
		}
		else{
			inicioMant();
		}
	}
}