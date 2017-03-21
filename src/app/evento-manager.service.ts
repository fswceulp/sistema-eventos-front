import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Evento } from './Evento';

@Injectable()
export class EventoManagerService {

  constructor(private http: Http) { }

  getEventosFromFile() {
    return this.http.get('src/eventos-file.json')
      // .map((resposta: Response) => this.preencheEventosFromFile(resposta.json()));
      .map((resposta: Response) => resposta.json() as Evento[] );
  }

  preencheEventosFromFile(retorno: any[]): Evento[]{
    var array: string[];
    let eventos: Evento[] = [];
    for(let o of retorno){
      //percorro todos os objetos do localStorage
      array = Object.keys(o);
      var objEvento: Evento = new Evento(0, "", "");
      for(let key of array){
        // percorro todas as chaves do objeto (todos os atributos)
        // console.log(o[key]);
        switch(key){
          case "id":{
            objEvento.id = o[key];
            break;
          }
          case "nome":{
            objEvento.nome = o[key];
            break;
          }
          case "sigla":{
            objEvento.sigla = o[key];
            break;
          }
          case "inicio":{
            objEvento.inicio = o[key];
            break;
          }
          case "termino":{
            objEvento.termino = o[key];
            break;
          }
          case "url":{
            objEvento.url = o[key];
            break;
          }
          case "cidade":{
            objEvento.cidade = o[key];
            break;
          }
          case "estado":{
            objEvento.estado = o[key];
            break;
          }
          case "local":{
            objEvento.local = o[key];
            break;
          }
        }//fim switch
      }
      eventos.push(objEvento);
    }
    return eventos;
  }



}
