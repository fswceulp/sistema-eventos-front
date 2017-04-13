import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Autor } from './Autor';

import 'rxjs/add/operator/map';

@Injectable()
export class AutoresService {
    constructor(private http: Http) {
    }

    all(): Observable<Autor[]> {
        return this.http.get('../../public/dados/autores.json')
            .map(response => response.json());
    }

}
