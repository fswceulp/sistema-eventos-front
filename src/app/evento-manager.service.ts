import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventoManagerService {

  constructor(private http: Http) { }
  
  getEventos() {
    return this.http.get('./src/app/lista.json')
      .map((response: Response) => response.json());
  }
}