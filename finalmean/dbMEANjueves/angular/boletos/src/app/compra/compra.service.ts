import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { VentaBoleto } from './modelos/venta-boleto'
@Injectable()
export class CompraService {

  constructor( private httpCompra:HttpClient) { }

 nuevaCompra(venta:VentaBoleto){
 	return this.httpCompra.post('/api/nuevoCompra',venta).toPromise();
 }
 historialCompraDNI(dni){
   return  this.httpCompra.get('/api/historial/'+dni).toPromise();
 }

 historialCompraMAIL(usuario){
   return  this.httpCompra.get('/api/historialMail/'+usuario).toPromise();
 }


}
