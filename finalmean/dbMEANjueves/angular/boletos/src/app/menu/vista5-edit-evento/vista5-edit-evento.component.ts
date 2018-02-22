import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../../eventos/modelo/evento';
import { EventosService } from '../../eventos/eventos.service';

@Component({
  selector: 'app-vista5-edit-evento',
  templateUrl: './vista5-edit-evento.component.html',
  styleUrls: ['./vista5-edit-evento.component.css']
})
export class Vista5EditEventoComponent implements OnInit {
@Input() editables:Evento;
editEvent:Evento=new Evento(0,"","","","",null);//fuck it
  constructor(private eventoService:EventosService) { }

  ngOnInit() {
  	Object.assign(this.editEvent,this.editables);
//  	console.log(this.editEvent);
  }

actualizar(){
console.log(this.editEvent);

	this.eventoService.editEvento(this.editEvent)
	.then((d:Event)=>{
    console.log(d);
    alert("A buena hora :)")
	})
	.catch((err)=>{
		alert("fuck mala acualizacion");
	})
      location.reload(true);

	//console.log(this.editEvent)
}

}
