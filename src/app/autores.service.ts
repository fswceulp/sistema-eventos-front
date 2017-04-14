import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Autor } from './Autor';

import 'rxjs/add/operator/map';

@Injectable()
export class AutoresService {
    constructor(private http: Http) {
    }

    all1(){
        
        let autores: any[] = [
            {
                "id":"1",
                "nome":"1",
                "email":"11"
            },
            {
                "id":"2",
                "nome":"22",
                "email":"22"
            }
        ];
        return this.preencheAutoresFromFile(autores);
    }

    all(): Observable<Autor[]> {
        return this.http.get('../../public/dados/autores.json')
            .map(resposta => this.preencheAutoresFromFile(resposta.json()));
    }

    preencheAutoresFromFile(retorno: any[]): Autor[]{
        var attbAutores: string[];
        var autores: Autor[] = [];
        for(let r of retorno){
            attbAutores = Object.keys(r);
            let objAutor = new Autor("", "");
            for(let key of attbAutores){    
                switch(key){
                    case "id": {
                        objAutor.id = r[key];
                        break;
                    }
                    case "nome": {
                        objAutor.nome = r[key];
                        break;
                    }
                    case "email": {
                        objAutor.email = r[key];
                        break;
                    }
                }

            }
            autores.push(objAutor);
        }        
        return autores;
    }

}
