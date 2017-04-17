import { Injectable } from '@angular/core';
import { Evento } from './Evento';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';

@Injectable()
export class EventosService {
    constructor(private http: Http) {
    }

    all(): Observable<Evento[]> {
        return this.http.get('assets/dados/eventos.json')
            .map(response => response.json() as Evento[]);
    }

    find(id: number): Observable<Evento> {
        return this.all()
            .map(eventos => eventos.find(evento => evento.id === id));
    }
}
