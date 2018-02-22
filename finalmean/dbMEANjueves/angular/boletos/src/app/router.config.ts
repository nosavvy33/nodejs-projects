import { Route } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { Vista1Component } from './menu/vista1/vista1.component';
import { Vista2Component } from './menu/vista2/vista2.component';
import { Vista3Component } from './menu/vista3/vista3.component';
import { Vista4Component } from './menu/vista4/vista4.component';
import { Vista5Component } from './menu/vista5/vista5.component';
import { Vista5NewEventoComponent } from './menu/vista5-new-evento/vista5-new-evento.component';
import { Vista5EditEventoComponent } from './menu/vista5-edit-evento/vista5-edit-evento.component';
import { EventosComponent } from './eventos/eventos.component';

export const RouterConfig:Route[]=[
	{path:'menu',component:MenuComponent},
	{path:'vista1',component:Vista1Component},
	{path:'vista2',component:Vista2Component},
	{path:'vista3',component:Vista3Component},
	{path:'vista4',component:Vista4Component},
	{path:'vista5',component:Vista5Component},
	{path:'vista5-new-evento',component:Vista5NewEventoComponent},
	{path:'vista5-edit-evento',component:Vista5EditEventoComponent}


]