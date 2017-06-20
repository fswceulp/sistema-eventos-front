import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EstadosService {
    constructor(private http: Http) {
    }

    all(): Observable<any[]> {
        return this.http.get('assets/dados/estados.json')
            .map(response => response.json());
    }

}
