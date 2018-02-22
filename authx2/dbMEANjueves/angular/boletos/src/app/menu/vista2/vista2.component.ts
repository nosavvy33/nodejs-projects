import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EventosService } from '../../eventos/eventos.service';
import { Evento } from '../../eventos/modelo/evento';
import { Estado } from './estado';
@Component({
  selector: 'app-vista2',
  templateUrl: './vista2.component.html',
  styleUrls: ['./vista2.component.css']
})
export class Vista2Component implements OnInit {
	eventoCarritos:Evento[];
  arre=new Array();
  arreglo=new Array();
  arregloDelete=new Array();
  arregloCarrito:boolean[];//este no, este esta volando no sirve :v no lo borro por que ...nose.
  cookie=true;
  carroVacio=true;

  formCompra=new Array();

  Estadito=new Array();

  comprateEste=new Array();///este permite el hide de cada componente de manera independiente
//the Array Power!! stay on me!!! XD fuck no, igual el problema sigue :v
  carritoCookie=new Array();
  
   s=this.cookieService.get('carrito');
  constructor(private cookieService:CookieService,private eventoService:EventosService) { }
  ngOnInit() {
  console.log(this.cookieService.getAll());  
    this.estadoCarro();
   var allCookies: {} = this.cookieService.getAll();
   console.log(allCookies);
    var arre:any[]=[allCookies];
    delete(arre[0].visitante);
    var total=arre[0].carrito;
    delete(arre[0].carrito);
    delete(arre[0].usuario);
    var al=arre[0];
    
    for(let char in al){
      this.Estadito.push([true]);
      this.formCompra.push([false]);
      this.comprateEste.push([true]);

      var ss=char.split(" ",2)      
      var s=ss[1];
      this.carritoCookie.push([s]);
      this.eventoPorId(s);
      //console.log(s);
    }    
    console.log(this.arreglo);
	
    var estadoCarrito=this.cookieService.get('carrito');
    //traer evento del app-compra


  }

  mensaje(){
  }

  eventoPorId(o){
  	 this.eventoService.listarEvento(o)
  	.then((d:Evento)=>{
      //console.log(d)
      this.arreglo.push(d);
  	}).catch((err)=>{
  		console.log(err);
  	})
  }

  quitar(i){
    //console.log(this.Estadito[i][0]);
    this.Estadito[i][0]=false;
    location.reload(true);
    /*i=i+1;
    let obj:string='ob';
    let ob=obj+i+" "+e[0]._id;
    cookie=false;*/


  }


  vaciar(){
   var borrarcookies: {} = this.cookieService.getAll();
   //console.log(allCookies);
    var arregloDelete:any[]=[borrarcookies];
    delete(arregloDelete[0].visitante);
    var total=arregloDelete[0].carrito;
    delete(arregloDelete[0].carrito);
    delete(arregloDelete[0].usuario);
    var al=arregloDelete[0];


    for(let char in al){
    this.cookieService.delete(char);
  }
    location.reload(true); 
  this.cookieService.set('carrito','0');
}

estadoCarro(){
  var estadoCarrito=this.cookieService.get('carrito');
  if (estadoCarrito != '0') {
   this.carroVacio=false;
   console.log(estadoCarrito);
  }
}
comprarOne(item,i,event){
  //console.log(event)
}
//esto es del app-compra :D
tovista2(event){
  console.log("holy shit funciona!"+event);
  //this.Estadito[event][0]=false
  this.comprateEste[event][0]=false;

}

}
