import { Injectable } from '@angular/core';
import { Evento } from './Evento';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EventosService {
    constructor(private http : Http) {
    }

    all() : Observable<Evento[]>{
        return this.http.get('../../public/dados/eventos.json')
            .map(response => response.json() as Evento[]);
    }

}
