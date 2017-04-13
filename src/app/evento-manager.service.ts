import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Evento } from './Evento';
import { Artigo } from './Artigo';
import { Autor } from './Autor';

@Injectable()
export class EventoManagerService {

  constructor(private http: Http) { }

  getEventosFromFile() {
    return this.http.get('../../public/dados/eventos.json')
      .map((resposta: Response) => this.preencheEventosFromFile(resposta.json()));
      //.map((resposta: Response) => resposta.json() as Evento[] );
  }

  preencheEventosFromFile(retorno: any[]): Evento[]{
    var array: string[];
    let eventos: Evento[] = [];
    var atributosArtigo: string[];
    for(let o of retorno){
      //percorro todos os objetos do arquivo
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
          case "artigos":{
            objEvento.artigos = [];
            
            for(let artigo of o[key]){
              var objArtigo =  new Artigo("", [], "", []);
              atributosArtigo = Object.keys(artigo);
              for(let key of atributosArtigo){
                switch(key){
                  case "titulo":{
                    objArtigo.titulo = artigo[key];
                    break;
                  }
                  case "id":{
                    objArtigo.id = artigo[key];
                    break;
                  }
                  case "resumo":{
                    objArtigo.resumo = artigo[key];
                    break;
                  }
                  case "palavrasChave":{
                    objArtigo.palavrasChave = artigo[key];
                    break;
                  }
                  case "autores":{
                    objArtigo.autores = [];
                    for(let autor of artigo[key]){
                      let objAutor = new Autor("", "");
                      let atributosAutor = Object.keys(autor);
                      for(let key of atributosAutor){
                        switch(key){
                          case "nome":{
                            objAutor.nome = autor[key];
                            break;
                          }
                          case "email":{
                            objAutor.email = autor[key];
                            break;
                          }
                          case "id":{
                            objAutor.id = autor[key];
                            break;
                          }
                        }
                      }
                      objArtigo.autores.push(objAutor);
                    }
                    break;
                  }
                }
              }
              objEvento.artigos.push(objArtigo);
            }

          }
        }//fim switch
      }
      eventos.push(objEvento);
    }
    return eventos;
  }



}
