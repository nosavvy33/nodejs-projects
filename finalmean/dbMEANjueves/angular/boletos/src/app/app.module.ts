import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

//los servicios AGREGA LOS SERVICIOS QUE VAS A CREAR CT...!!!
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';
import { EventosService } from './eventos/eventos.service';
import { CompraService } from './compra/compra.service';
//firebase de m!!
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AutentificacionService } from './servicio/autentificacion.service';
export const firebaseConfig={
    apiKey: "AIzaSyCg_YGZAueT51yOZV0hLu9gaYaj8Wz8Q3w",
    authDomain: "login-con-ag5.firebaseapp.com",
    databaseURL: "https://login-con-ag5.firebaseio.com",
    projectId: "login-con-ag5",
    storageBucket: "login-con-ag5.appspot.com",
    messagingSenderId: "975776787898"
};


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EventosComponent } from './eventos/eventos.component';
import { Vista1Component } from './menu/vista1/vista1.component';
import { Vista2Component } from './menu/vista2/vista2.component';
import { Vista3Component } from './menu/vista3/vista3.component';
import { Vista4Component } from './menu/vista4/vista4.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
//para los ngModel
import { FormsModule } from '@angular/forms';
//routas
import { RouterConfig } from './router.config';
import { CompraComponent } from './compra/compra.component';
import { Vista5Component } from './menu/vista5/vista5.component';
import { Vista5NewEventoComponent } from './menu/vista5-new-evento/vista5-new-evento.component';
import { Vista5EditEventoComponent } from './menu/vista5-edit-evento/vista5-edit-evento.component';
import { NewUserComponent } from './new-user/new-user.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EventosComponent,
    Vista1Component,
    Vista2Component,
    Vista3Component,
    Vista4Component,
    LoginComponent,
    CompraComponent,
    Vista5Component,
    Vista5NewEventoComponent,
    Vista5EditEventoComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig,{enableTracing:false}),//el debug papu :v
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [CookieService,LoginService,EventosService,CompraService,AutentificacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
