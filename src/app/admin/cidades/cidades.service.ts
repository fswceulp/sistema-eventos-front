import { Injectable } from '@angular/core';
import { Cidade } from './Cidade';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CidadesService {
    private headers = null;
    private options = null;

    constructor(private http: Http) { 
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers }); 
    }

    select(id: number){
        return this.http.get('http://localhost:3000/cidades?id'+id)
            .map(response => response.json() as Cidade);
    }

    save(nome: string, estado: number) {
        const cidade = { nome: nome, estadoId: estado};
        return this.http.post('http://localhost:3000/cidades', JSON.stringify(cidade), this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

    all(): Observable<Cidade[]> {
        return this.http.get('http://localhost:3000/cidades?_expand=estado')
            .map(response => response.json() as Cidade[]);
    }

    estados(): Observable<Cidade[]> {
        return this.http.get('http://localhost:3000/estados')
            .map(response => response.json() as any[]);
    }

    delete(id: number):Observable<any>{
        return this.http.delete('http://localhost:3000/cidades/'+id, this.options)
            .map(response => response.json() ).catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

    update(id: number, nome: string, estado: number) {
        const cidade = { id: id, nome: nome, estadoId: estado};
        return this.http.put('http://localhost:3000/cidades/' + id, JSON.stringify(cidade), this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

    getAllByPage(numeroPagina: number): Observable<any[]> {
        return this.http.get('http://localhost:3000/cidades?_page='+numeroPagina+'&_limit=5&_expand=estado')
            .map(response => response.json() as Cidade[])
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

    getCidadeById(idCidade: number): Observable<any> {
         return this.http.get('http://localhost:3000/cidades/'+idCidade)
             .map(response => response.json())
             .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }
}