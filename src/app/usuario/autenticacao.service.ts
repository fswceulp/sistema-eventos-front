import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Usuario } from './Usuario';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    private root: string = 'http://localhost:3000/usuarios';

    constructor(private http: Http) {
    }

    validaCredenciais(login: string, senha: string): Observable<Usuario>{
        try{
            return this.http.get(this.root + '?nome='+ login +'&&senha=' + senha)
            .map(response => response.json() as Usuario);
        }
        catch(ex){
            this.handleError(ex);
        }
        
    }

    private handleError(error: Response){
        return Observable.throw(error.json().error || "500 Erro interno no servidor");
    }

}
