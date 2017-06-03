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

    all(): Observable<Cidade[]> {
        return this.http.get('assets/dados/cidades.json')
            .map(response => response.json() as Cidade[]);
    }

    find(uf: string): Observable<Cidade> {
        return this.all()
            .map(cidades => cidades.find(cidade => estado.uf === uf));
    }
}