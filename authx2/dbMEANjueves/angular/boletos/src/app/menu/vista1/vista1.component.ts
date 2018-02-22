import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EventosService } from '../../eventos/eventos.service';
import { Evento } from '../../eventos/modelo/evento';
import { Compra } from '../compra';
@Component({
  selector: 'app-vista1',
  templateUrl: './vista1.component.html',
  styleUrls: ['./vista1.component.css']
})
export class Vista1Component implements OnInit {
  Eventoss:Evento[];

//	cookieValue='UNKNOWNdas'; definiendo una variable para que haga de cookie :D se puede contener a un cookie de otro lado :v

  constructor(private cookieService:CookieService,private eventoService:EventosService) { }
  compra:Compra[];
  ngOnInit() {
  //  this.cookieService.set('mensaje','Hello');
 //   this.cookieValue=this.cookieService.get('Test');
  this.eventoService.listarEventos()
   .then((d:Evento[])=>{
     this.Eventoss=d;
     //console.log(this.Eventoss[0].local);
   }).catch((err)=>{
     console.log("fuck");
   });
   console.log(this.cookieService.getAll());

  }

  alCoche(e){

    let al=this.contadorPlusCarrito();
    //deginiendo el prefijo
    let obj:string='ob';
    let ob=obj+al+" "+e._id;
    this.cookieService.set(ob,e._id);
    console.log(
      this.cookieService.getAll()
    );
  }
  contadorPlusCarrito(){
    let  compra=parseInt(this.cookieService.get('carrito'));
    let cosa=compra+1;
    let al=cosa.toString();
    this.cookieService.set('carrito',al);
    return al;
  }

/*Se comenta esta seccion Ojo con el evento aca abajo.
  IngresarCookie(e){
  	//e.preventDefault();//esto es para que la pagina no mande el evento submit del form en el hmtl

  	//this.cookieService.set('mensaje',e.target.elements[0].value);//para meter un valor cookie :D
  	this.cookieValue=this.cookieService.get('visitante');//esto es para traer un cookie
  	console.log(this.cookieValue);
  	this.cookieService.set('visitante','online');
  	//console.log(e.target.elements[0].value) para usar componentes del Html directamente
  }
*/
}
