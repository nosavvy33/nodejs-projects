import {Precio} from './precio';

export class Evento {
		constructor(
		public _id:number,
		public local:string,
		public visitante:string,
		public estadio:string,
		public fecha:string,
		public Precio:Precio
	){}
}
