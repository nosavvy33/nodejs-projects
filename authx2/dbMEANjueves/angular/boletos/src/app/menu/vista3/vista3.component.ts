import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../../login/login.service';
import { Login } from '../../login/login';
import { CompraService } from '../../compra/compra.service';
import { VentaBoleto } from "../../compra/modelos/venta-boleto";
@Component({
  selector: 'app-vista3',
  templateUrl: './vista3.component.html',
  styleUrls: ['./vista3.component.css']
})
export class Vista3Component implements OnInit {
  correo:string;
  constructor(private cookieService:CookieService, private loginServ:LoginService, private compraServ:CompraService) { }
  dni:number=0;
  historyEvent:VentaBoleto[];
  ngOnInit() {
    this.correo=this.cookieService.get('usuario');
  //  this.obtenerDatosDelCorreo(this.correo);
    this.obtenerHistorialUSER(this.correo);
  }


  mensaje(){
  	console.log(this.correo);
  }

  obtenerDatosDelCorreo(e){
    this.loginServ.verificarUsuario(e)
    .then((d:Login[])=>{
      this.dni=d[0].dni;
      console.log(this.dni);
    })
    .catch((err)=>{
      alert('Error al consultar correo')
    })
  }
  obtenerHistorialDNI(dni){
    this.compraServ.historialCompraDNI(dni)
    .then((d:VentaBoleto[])=>{
      //this.historyEvent=d;
      console.log(d);
    })
    .catch((err)=>{
      console.log(err);
    })

  }

  obtenerHistorialUSER(usuario){
    this.compraServ.historialCompraMAIL(usuario)
    .then((d:VentaBoleto[])=>{
      this.historyEvent=d;
      //console.log(d);
    })
    .catch((err)=>{
      console.log(err);
    })

  }















}
