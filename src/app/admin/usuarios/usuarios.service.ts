import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Usuario } from './Usuario';

@Injectable()
export class UsuariosService {
    private headers = null;
    private options = null;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    all(): Observable<any[]> {
        return this.http.get('http://localhost:3000/usuarios')
            .map(response => response.json());
    }

    save(user: Usuario) {
        console.log(user);
        const usuario = { nome: user.nome, email: user.email, senha: user.senha, endereco: user.endereco, telefone: user.telefone };
        return this.http.post('http://localhost:3000/usuarios', JSON.stringify(usuario), this.options)
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

    update(user: Usuario) {
        const usuario = { id: user.id, nome: user.nome, email: user.email, senha: user.senha, endereco: user.endereco, telefone: user.telefone };
        return this.http.put('http://localhost:3000/usuarios/' + user.id, JSON.stringify(usuario), this.options)
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

    delete(id: number) {
        return this.http.delete('http://localhost:3000/usuarios/' + id, this.options)
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

    getUsuarioById(idUsuario: number): Observable<any> {
        return this.http.get('http://localhost:3000/usuarios/' + idUsuario)
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

}