import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../eventos/eventos.service';
import { Evento } from '../../eventos/modelo/evento';

@Component({
  selector: 'app-vista5',
  templateUrl: './vista5.component.html',
  styleUrls: ['./vista5.component.css']
})
export class Vista5Component implements OnInit {
  Eventos:Evento[];
  editar:false;
  constructor(private eventoService:EventosService) { }
  private estado=new Array();//Para el editado independiente de cada elemento
  ngOnInit() {

    this.eventoService.listarEventos()
    .then((d:Evento[])=>{
      console.log(d);
      this.Eventos=d;
      for (var i = 0; i < d.length; ++i) {
        this.estado.push([false]);
      }
    }).catch((err)=>{
      console.log("fuck");
    });
    
    
  }

  eliminarEvento(id){
    const a=confirm("Desea eliminar este evento?")
    if(a){
      this.eventoService.eliminarEvento(id);
      location.reload(true);
    }

  }
  

}
