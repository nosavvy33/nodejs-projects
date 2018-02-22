var express = require('express');
var router = express.Router();
var fcargos = require('./rutas_cargos.js');
var bcargos = require('./rutas_bandas.js');
var acargos = require('./rutas_areas.js');

router.get('/', c_inicio);

router.get('/mantenimientos', c_mantenimientos);
router.get('/procesos', c_procesos);
router.get('/reportes', c_reportes);
router.get('/bandas', c_bandas);
//CARGOS
router.get('/m_cargos_listado', fcargos.listado);
router.get('/m_cargos_nuevo', fcargos.nuevo);
router.post('/m_cargos_grabar_nuevo', fcargos.grabar_nuevo);
router.get('/m_cargos_editar/:xid', fcargos.editar);
router.post('/m_cargos_grabar_editar', fcargos.grabar_editar);
router.get('/m_cargos_eliminar/:xid', fcargos.eliminar);
//BANDAS
router.get('/m_bandas_listado', bcargos.listado);
router.get('/m_bandas_nuevo', bcargos.nuevo);
router.post('/m_bandas_grabar_nuevo', bcargos.grabar_nuevo);
router.get('/m_bandas_editar/:xid', bcargos.editar);
router.post('/m_bandas_grabar_editar', bcargos.grabar_editar);
router.get('/m_bandas_eliminar/:xid', bcargos.eliminar);
//AREAS
router.get('/m_areas_listado', acargos.listado);
router.get('/m_areas_nuevo', acargos.nuevo);
router.post('/m_areas_grabar_nuevo', acargos.grabar_nuevo);
router.get('/m_areas_editar/:xnombre', acargos.editar);
router.post('/m_areas_grabar_editar', acargos.grabar_editar);
router.get('/m_areas_eliminar/:xnombre', acargos.eliminar);




function c_inicio(req, res){
	res.render('index',{});
}

function c_mantenimientos(req,res){
	res.render('mantenimientos',{});
}

function c_bandas(req, res){
	res.render('bandas',{});
}

function c_areas(req,res){
	res.render('areas',{});
}

function c_procesos(req,res){
	res.send("Procesos");
}

function c_reportes(req,res){
	res.send("Reportes");
}

module.exports = router;