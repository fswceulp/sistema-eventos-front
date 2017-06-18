import { Injectable } from '@angular/core';
import { Response, Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Usuario } from './usuario';

@Injectable()
export class UsuarioService{
    private usuarios: Usuario[] = [];
    private usuarioUrl = 'http://localhost:3000/usuarios';

    constructor(private http: Http){}

    getUsuario(id: number): Observable<Usuario[]>{
        const usuarioUrlSelect = `${this.usuarioUrl}/${id}`;
        return this.http.get(usuarioUrlSelect)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
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