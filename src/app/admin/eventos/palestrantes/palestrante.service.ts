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
        return this.http.get('http://localhost:3000/palestrantes?conferenciaId='+ idEvento)
            .map(response => response.json());
    }

    // all(idEvento: number): Observable<any[]> {
    //     return this.http.get('http://localhost:3000/palestras?_expand=palestrante')
    //         .map(response => response.json());
    // }

    save(dadosPalestrante: Palestrante) {
        const palestrante = { 
            nome: dadosPalestrante.nome, 
            filiacao: dadosPalestrante.filiacao, 
            miniBiografia: dadosPalestrante.miniBiografia, 
            linkLattes: dadosPalestrante.linkLattes, 
            site: dadosPalestrante.site, 
            email: dadosPalestrante.email,
            palestra: dadosPalestrante.palestra,
            idEvento: dadosPalestrante.idEvento
        };
        // console.log(JSON.stringify(palestrante));
        return this.http.post('http://localhost:3000/palestrantes', JSON.stringify(palestrante), this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

    update(id: number, nome: string, uf: string) {
        const estado = { id: id, nome: nome, uf: uf };
        return this.http.put('http://localhost:3000/estados/' + id, JSON.stringify(estado), this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

    delete(id: number) {
        return this.http.delete('http://localhost:3000/estados/' + id, this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }    
    
}