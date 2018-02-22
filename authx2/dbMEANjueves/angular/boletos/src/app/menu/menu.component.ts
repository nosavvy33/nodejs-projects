import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
	

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private cookieService:CookieService) { }
  estado=false;

  ngOnInit() {
  	const va =this.cookieService.get('visitante');
  	if (va=='online') {
      this.estado=true;
  	}
  }
  salir(){
      this.cookieService.deleteAll();
    //this.cookieService.set('visitante','offline');
  }


}
