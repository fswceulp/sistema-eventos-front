import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Usuario } from './Usuario';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    headers = null;
    options = null;

    private root: string = 'http://localhost:3000/pessoas';

    constructor(private http: Http) {
        this.headers = new Headers({'content-type': 'application/json'});
        this.options = new RequestOptions({headers: this.headers});
    }

    validaCredenciais(login: string, senha: string): Observable<Usuario[]>{
        try{
            return this.http.get(this.root + '?email='+ login +'&&senha=' + senha)
            .map(response => response.json() as Usuario[]);
        }
        catch(ex){
            this.handleError(ex);
        }
        
    }

    private handleError(error: Response){
        return Observable.throw(error.json().error || "500 Erro interno no servidor");
    }

}
