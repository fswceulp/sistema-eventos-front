import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {
    constructor(private http: Http) { }
    private usuarioUrl = 'http://localhost:3000/usuarios';

    login(username: string, password: string) {
        const usuarioUrlSelect = `${this.usuarioUrl}?username=${username}&password=${password}`;
        return this.http.get(usuarioUrlSelect)
            .map(this.extractData)
            .catch(this.handleError);
    }

     private extractData(res: Response) {
            let body = res.json();
            localStorage.setItem('currentUser', JSON.stringify(body));

            return body || { };
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}