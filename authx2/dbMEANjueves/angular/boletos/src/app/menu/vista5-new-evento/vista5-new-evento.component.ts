import { Component, OnInit } from '@angular/core';
import { Evento } from '../../eventos/modelo/evento';
import { Precio } from '../../eventos/modelo/precio';
import { EventosService } from '../../eventos/eventos.service';

@Component({
  selector: 'app-vista5-new-evento',
  templateUrl: './vista5-new-evento.component.html',
  styleUrls: ['./vista5-new-evento.component.css']
})
export class Vista5NewEventoComponent implements OnInit {
date=new Date();
dat=this.date.toString();
newPrecio:Precio=new Precio(0,0,0,0);
newEvento:Evento=new Evento(0,"","","","",this.newPrecio);
  constructor(private eventoService:EventosService) { }

  ngOnInit() {

  }

registrar(){
console.log(this.newEvento);

this.eventoService.nuevoEvento(this.newEvento)
	.then((d:Event[])=>{
		console.log(d)
		alert("Nice ya registro un nuevo evento XD");
		location.href='vista5';
	})
	.catch((err)=>{
		alert('damn it frankie ');
	})


}


}
