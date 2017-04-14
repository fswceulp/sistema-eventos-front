import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Evento} from './Evento';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EventoManagerService {

  constructor(private http: Http) { }

  getEventos() : Observable<any[]> {
    return this.http.get('../../public/dados/eventos.json')
      .map(response => response.json() as Evento[]);
  }
}
