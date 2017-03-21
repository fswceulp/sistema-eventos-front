import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class EventosService {
    constructor(private http: Http) { }
    private apiUrl = 'http://localhost:3003/eventos';

    eventos() : Observable<any[]> {
        return this.http.get(this.apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); 
        return Observable.throw(errMsg);
    }

    criar(id: number, nome: string, sigla: string, inicio: string, termino: string, url: string, cidade: string, estado: string, local: string, imagem: string): Observable<any[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiUrl, { id, nome, sigla, inicio, termino, url, cidade, estado, local, imagem }, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    

}