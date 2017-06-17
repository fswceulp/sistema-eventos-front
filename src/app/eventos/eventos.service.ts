import { Injectable } from '@angular/core';
import { Evento } from './Evento';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
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

    find(id: number): Observable<Evento> {
        return this.all()
            .map(eventos => eventos.find(evento => evento.id === id));
    }
	
	getArtigosByEvento(idEvento: number): Observable<any[]>{
		return this.http.get('http://localhost:3000/artigos?idEvento=' + idEvento)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
	}
}
