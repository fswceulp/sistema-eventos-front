import { Cidade } from './Cidade';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';

@Injectable()
export class CidadesService {
    constructor(private http: Http) {
    }

    all(): Observable<Cidae[]> {
        return this.http.get('assets/dados/estados.json')
            .map(response => response.json() as Estado[]);
    }

    find(uf: string): Observable<Estado> {
        return this.all()
            .map(estados => estados.find(estado => estado.uf === uf));
    }
}