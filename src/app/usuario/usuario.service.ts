import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Usuario } from './Usuario';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {
    headers = null;
    options = null;

    private root: string = 'http://localhost:3000/pessoas';

    constructor(private http: Http) {
        this.headers = new Headers({ 'content-type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    save(email: string, senha: string) {
        try {
            const usuario = { email: email, senha: senha };
            console.log(usuario);
            return this.http.post(this.root, JSON.stringify(usuario), this.options)
                .map(response => response.json());
        }
        catch(ex){
            this.handleError(ex);
        }
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || "500 Erro interno no servidor");
    }

}
