import { Injectable } from '@angular/core';
import { Response, Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Evento } from './evento';

@Injectable()
    export class EventoService{
        private userLogado = JSON.parse(localStorage.getItem('currentUser'))[0];
        private eventos: Evento[] = [];
        private eventosUrl = 'http://localhost:3000/eventos';

        constructor(private http: Http){}

        getEventos(): Observable<Evento[]>{
            if(this.userLogado.role === "administrador"){
                var urlEventos = `${this.eventosUrl}?_expand=usuario&_expand=cidade&_expand=estado`;
            }else if(this.userLogado.role === "realizador"){
                var urlEventos = `${this.eventosUrl}?&_expand=usuario&_expand=cidade&_expand=estado&usuarioId=${this.userLogado.id}`;
            }
            return this.http.get(urlEventos)
                .map(this.extractData)
                .catch(this.handleError);
        }

        getEventosFiltro(q: string = null, paginaNumero: number=null): Observable<Evento[]>{
            if(this.userLogado.role === "administrador"){
                var urlEventos = `${this.eventosUrl}?q=${q}&_expand=usuario&_expand=cidade&_expand=estado&_page=${paginaNumero}&_limit=6`;
            }else if(this.userLogado.role === "realizador"){
                var urlEventos = `${this.eventosUrl}?q=${q}&_expand=usuario&_expand=cidade&_expand=estado&usuarioId=${this.userLogado.id}&_page=${paginaNumero}&_limit=6`;
            }
            return this.http.get(urlEventos)
                .map(this.extractData)
                .catch(this.handleError);
        }


        getEvento(id: number): Observable<Evento>{
            const url = `${this.eventosUrl}/${id}`;
            return this.http.get(url)
                .map(this.extractData)
                .catch(this.handleError);
        }

        save(evento: Evento) : Observable<Evento> {
            let body = JSON.stringify(evento);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this.http.post(this.eventosUrl, body, options)
                            .map(this.extractData)
                            .catch(this.handleError);
        }

        update(evento: Evento): Observable<Evento>{
            const urlUpdate = `${this.eventosUrl}/${evento.id}`;
            let body = JSON.stringify(evento);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({headers: headers});

            return this.http.put(urlUpdate, body, options)
                .map(this.extractData)
                .catch(this.handleError);
        }

        delete(evento: Evento): Observable<Evento>{
            const urlDetele = `${this.eventosUrl}/${evento.id}`;
            return this.http.delete(urlDetele)
                .map(this.extractData)
                .catch(this.handleError);
        }

        search(term: string): Observable<Evento[]> {
            return this.http
                .get(this.eventosUrl + `?name=${term}`)
                .map(response => response.json() as Evento[]);
        }

        private extractData(res: Response) {
            let body = res.json();
            return body || { };
        }

        private handleError(error: any) {
            let errMsg = (error.message) ? error.message :
                error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            console.error(errMsg);
            return Observable.throw(errMsg);
        }

        isAutorizado(evento: Evento){
            if(this.userLogado.role == "administrador"){
                return true;
            }else if(evento.usuarioId == this.userLogado.id){
                return true;
            }
            return false;
        }

    }
