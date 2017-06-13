import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';

@Injectable()
export class UsuariosService {
    private options = null;

    constructor(private http: Http) {
    }

    all(): Observable<any[]> {
        return this.http.get('http://localhost:3000/usuarios')
            .map(response => response.json() as any[]);
    }

    find(id: number): Observable<any> {
        return this.all()
            .map(usuario => usuario.find(usuario => usuario.id === id));
    }

    save(usuario: any) {
        const user = {nome: usuario.nome, email: usuario.email};
        return this.http.post('http://localhost:3000/usuarios', JSON.stringify(user), this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

    update(usuario: any) {
        const user = { id: usuario.id, nome: usuario.nome, email: usuario.email };
        return this.http.put('http://localhost:3000/usuarios/' + usuario.id, JSON.stringify(user), this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }



    delete(id: number) {
        return this.http.delete('http://localhost:3000/usuarios/' + id, this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }
}
