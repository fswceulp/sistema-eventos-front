import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Evento } from './Evento';
import { Artigo } from '../artigos/Artigo';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EventosService {
	private headers = null;
    private options = null;
	
    constructor(private http: Http) { 
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers });
    }

	all(): Observable<any[]> {
        return this.http.get('http://localhost:3000/conferencias')
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }
	
	getEventoById(eventoId): Observable<Evento> {
        return this.http.get('http://localhost:3000/conferencias/'+eventoId+'?_expand=cidade')
            .map(response => response.json() as Evento)
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }
	
	getArtigosByEvento(eventoId: number): Observable<any[]>{
		return this.http.get('http://localhost:3000/artigos?eventoId=' + eventoId)
            .map(response => response.json() as Artigo[])
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
	}

}
