import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Palestra } from '../palestras/Palestra';
import { Palestrante } from './Palestrante';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PalestrantesService {
    private headers = null;
    private options = null;

    constructor(private http: Http) { 
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers });
    }

    all(idEvento: number): Observable<any[]> {
        return this.http.get('http://localhost:3000/palestrantes?eventoId='+ idEvento)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
            
    }

    getAllByPage(numeroPagina: number, idEvento: number): Observable<any[]> {
        return this.http.get('http://localhost:3000/palestrantes?_page='+numeroPagina+'&_limit=5&eventoId='+idEvento)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
            
    }

    verificaPermissaoUsuario(idUsuario: number, idEvento: number): Observable<any[]> {
         return this.http.get('http://localhost:3000/eventos?idUsuario='+idUsuario+'&id='+idEvento)
             .map(response => response.json())
             .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

    getPalestranteById(idPalestrante: number): Observable<any> {
         return this.http.get('http://localhost:3000/palestrantes/'+idPalestrante)
             .map(response => response.json())
             .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

    save(dadosPalestrante: Palestrante) {
        const palestrante = { 
            nome: dadosPalestrante.nome, 
            filiacao: dadosPalestrante.filiacao, 
            miniBiografia: dadosPalestrante.miniBiografia, 
            linkLattes: dadosPalestrante.linkLattes, 
            site: dadosPalestrante.site, 
            email: dadosPalestrante.email,
            palestra: dadosPalestrante.palestra,
            eventoId: dadosPalestrante.idEvento
        };
        return this.http.post('http://localhost:3000/palestrantes', JSON.stringify(palestrante), this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

    update(dadosPalestrante: Palestrante) {
        const palestrante = { 
            nome: dadosPalestrante.nome, 
            filiacao: dadosPalestrante.filiacao, 
            miniBiografia: dadosPalestrante.miniBiografia, 
            linkLattes: dadosPalestrante.linkLattes, 
            site: dadosPalestrante.site, 
            email: dadosPalestrante.email,
            palestra: dadosPalestrante.palestra,
            eventoId: dadosPalestrante.idEvento
        };
        return this.http.put('http://localhost:3000/palestrantes/' + dadosPalestrante.id, JSON.stringify(palestrante), this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

    delete(idPalestrante: number) {
        return this.http.delete('http://localhost:3000/palestrantes/' + idPalestrante)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }    
    
}