import { Injectable } from '@angular/core';
import { Programacao } from './Programacao';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProgramacoesService {
    private headers = null;
    private options = null;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    all(idEvento: number): Observable<any[]> {
        return this.http.get('http://localhost:3000/programacoes?idEvento=' +idEvento)
            .map(response => response.json());
    }

    save(dadosProgramacao: Programacao) {
        const programacao = {
            nome: dadosProgramacao.nome,
            idEvento: dadosProgramacao.idEvento,
            descricao: dadosProgramacao.descricao,
            local: dadosProgramacao.local,
            datahorainicio: dadosProgramacao.datahorainicio,
            datahoratermino: dadosProgramacao.datahoratermino,
            artigo: dadosProgramacao.artigo,
            palestra: dadosProgramacao.palestra
        };
        console.log(programacao);
        return this.http.post('http://localhost:3000/programacoes', JSON.stringify(programacao), this.options)
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

    update(dadosProgramacao: Programacao) {
        const programacao = {
            nome: dadosProgramacao.nome,
            descricao: dadosProgramacao.descricao,
            local: dadosProgramacao.local,
            datahorainicio: dadosProgramacao.datahorainicio,
            datahoratermino: dadosProgramacao.datahoratermino,
            artigo: dadosProgramacao.artigo,
            palestra: dadosProgramacao.palestra
        };
        return this.http.patch('http://localhost:3000/programacoes/' + dadosProgramacao.id, JSON.stringify(programacao), this.options)
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

    delete(id: number) {
        return this.http.delete('http://localhost:3000/programacoes/' + id, this.options)
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

    getProgramacaoById(idProgramacao: number) {
        return this.http.get('http://localhost:3000/programacoes/' + idProgramacao)
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Erro ao conectar com o servidor.'));

    }

    getArtigosByEvento(idEvento: number): Observable<any[]> {
        return this.http.get('http://localhost:3000/artigos?idEvento=' + idEvento)
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

    getPalestrasByEvento(idEvento: number): Observable<any[]> {
        return this.http.get('http://localhost:3000/palestras?idEvento=' + idEvento)
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

}