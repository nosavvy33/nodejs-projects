import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
import { LoginService } from '../login/login.service'
import { CompraService } from './compra.service';
import { VentaBoleto } from './modelos/venta-boleto';
import { Login } from '../login/login';
@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  @Output() eventoSalida = new EventEmitter()
	@Input() items;
  @Input() posicion;
	costoboleto:number;
  lugar="norte";
  dni:number=0;
  mail:string;
  ventaBoleto=new VentaBoleto();
  constructor(private cookie:CookieService,private loginService:LoginService,private compraServi:CompraService) { }

  ngOnInit() {
    console.log(this.posicion)
    this.mail=this.cookie.get('usuario');
    this.obtenerDatosDelCorreo(this.mail);
    this.costoboleto=this.items[0].Precio[0].norte;
  }

costoB(e,lol){
	 this.costoboleto=e;
   this.lugar=lol;
}

comprar(e){
   //tarjeta
  const tarjeta= e.target.elements[0].value
  //Correo y de paso sacamos el dni

  //Este metodo se paso al Init v_V //por cierto este mail ya se guardo en una variable haya arriba :v
  //costo del boleto
  this.costoB;
  const eventoId=this.items[0]._id;

console.log(this.lugar);

  this.ventaBoleto.usuario=this.mail;
  this.ventaBoleto.dni=this.dni;
  this.ventaBoleto.tarjeta=tarjeta;
  this.ventaBoleto.evento=eventoId;
  this.ventaBoleto.lugar=this.lugar;
  this.ventaBoleto.pago=this.costoboleto;

  this.serviceComprar(this.ventaBoleto);
  this.eventoSalida.emit(this.posicion);



//console.log(this.costoboleto, this.cookie.get('usuario'))


}

//del service para comprar el producto
serviceComprar(e:VentaBoleto){
  this.compraServi.nuevaCompra(e)
  .then((d:VentaBoleto[])=>{
    alert('Compra Exitosa');
  }).catch((err)=>{
    alert('Error en la compra :(');
  });
}

obtenerDatosDelCorreo(e){
  this.loginService.verificarUsuario(e)
  .then((d:Login[])=>{
    //this.dni=d[0].dni;
    this.dni=82773899;
    console.log(this.dni);
  })
  .catch((err)=>{
    alert('Error al consultar correo')
  })
}

}
