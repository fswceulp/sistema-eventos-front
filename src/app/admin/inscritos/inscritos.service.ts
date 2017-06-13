import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';

@Injectable()
export class InscritosService {
    private options = null;

    constructor(private http: Http) {
    }

    all(): Observable<any[]> {
        return this.http.get('http://localhost:3000/inscritos?_expand=usuario')
            .map(response => response.json() as any[]);
    }

    find(id: number): Observable<any> {
        return this.all()
            .map(inscritos => inscritos.find(inscrito => inscrito.id === id));
    }

    save(inscrito: any) {
        const insc = {conferenciaId: inscrito.conferenciaId, usuarioId:inscrito.usuarioId};
        return this.http.post('http://localhost:3000/inscritos', JSON.stringify(insc), this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }

    delete(id: number) {
        return this.http.delete('http://localhost:3000/inscritos/' + id, this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }
}
