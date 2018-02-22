import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './login.service';
import { Login } from './login';
//firebase and login Gmail
import { AutentificacionService } from '../servicio/autentificacion.service';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginVisitante:Login[];

  constructor(private cookieService:CookieService,private loginService:LoginService,private autorizacionServ:AutentificacionService) { }
  estado=true;
  ngOnInit() {
    const a=this.cookieService.get('visitante');
    if (a=='online') {
      this.estado=false;
    }
  }

  /*activo(e){
    e.preventDefault();
  	this.cookieService.set('visitante','online');
  	console.log(this.cookieService.getAll())
    location.reload(true);
  }*/
  verificarLogin(e){

    const valor=e.target.elements[0].value;
    this.loginService.verificarUsuario(valor)
    .then((d:Login[])=>{
      if (e.target.elements[1].value==d[0].password) {
        this.cookieService.set('visitante','online');
        this.cookieService.set('usuario',d[0].correo)
        this.cookieService.set('carrito','0');
        //location.reload(true);
        location.href='vista1';
      }else{
      alert("password o correo invalido");
      }
    }).catch((err)=>{
      alert("password o correo invalido");
    });
  }
loginGmail(){
  this.autorizacionServ.login()
  .then((data)=>{
    const moil=data.additionalUserInfo.profile.email;
    console.log(moil);
        this.cookieService.set('visitante','online');
        this.cookieService.set('usuario',moil)
        this.cookieService.set('carrito','0');
    console.log('Logeado Correctamente');
        location.href='vista1';
  })
  .catch((err)=>{
    console.log('error');
  })
}
}
