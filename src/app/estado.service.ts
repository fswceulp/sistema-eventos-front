import { Injectable } from '@angular/core';
import { Response, Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Estado } from './estado';
import { Cidade } from './cidade';

@Injectable()
    export class EstadoService{
        private estados: Estado[] = [];
        private estadosUrl = 'http://localhost:3000/estados/';

        constructor(private http: Http){}

        getEstados(): Observable<Estado[]>{
           return this.http.get(this.estadosUrl)
           .map(this.extractData)
           .catch(this.handleError);
        }

        getCidades(estadoId: number): Observable<Cidade[]>{
                return this.http.get(this.estadosUrl + estadoId+'/'+'cidades')
                .map(this.extractData)
                .catch(this.handleError);
        }

        private extractData(res: Response){
            let body = res.json();
            return body || { };
        }

        private handleError(error: any) {
            let errMsg = (error.message) ? error.message :
                error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            console.error(errMsg);
            return Observable.throw(errMsg);
        }

    }