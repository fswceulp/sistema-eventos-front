import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventoManagerService {

  constructor(private http: Http) { }

  getEventosFromFile() {
    return this.http.get('src/eventos-file.json')
      .map((resposta: Response) => resposta.json());
  }
}
