import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from './modelo/evento';

@Injectable()
export class EventosService {

  constructor(private httpEvento:HttpClient) { }

  listarEventos(){
  	return this.httpEvento.get('/api/eventos').toPromise();
  }

  listarEvento(id:string){
  	return this.httpEvento.get('/api/evento/'+id).toPromise();
  }

  eliminarEvento(id:number){
    return this.httpEvento.delete('/api/eliminarEvento/'+id).toPromise();
  }

  nuevoEvento(newEvento : Evento){
    return this.httpEvento.post('/api/nuevoEvento',newEvento).toPromise();
  }

  editEvento(evento:Evento){
     return this.httpEvento.put('/api/edit/'+evento._id,evento).toPromise();
  }


}
