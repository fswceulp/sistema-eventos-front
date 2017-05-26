import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    root: string = 'localhost:3000/usuarios';

    constructor(private http: Http) {
    }

    all(): Observable<any[]> {
        return this.http.get(this.root)
            .map(response => response.json());
    }
    validaCredenciais(login: string, senha: string): Observable<boolean>{
        return this.http.get(this.root + '?nome='+ login +'&&senha=' + senha)
            .map(response => response.json());
    }

}
