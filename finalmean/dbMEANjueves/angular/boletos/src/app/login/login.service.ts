import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private htppLogin:HttpClient) { }

verificarUsuario(correo:String){
	return this.htppLogin.get('/api/usuarioForMail/'+correo).toPromise();
}


}
