import { Injectable } from '@angular/core';
import { Evento }     from './Evento'; 
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EventoService {
  constructor(private http : Http) {}
  getEventos() : Observable<Evento[]> {
    return this.http.get('../../public/eventos.json').map(response => response.json() as Evento[]);
  }
}
