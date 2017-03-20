import { Component } from '@angular/core';
import { Evento } from './Evento';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html'
})
export class EventoManagerComponent {
  eventoSelecionado: Evento = null;
  evento: Evento = new Evento(0, '', '');
  enviado: boolean = false;
  editando: boolean = false;
  editado: boolean = false;
  eventos: Evento[] = [];

  constructor() {
    if(localStorage.getItem('eventos')){
      var retorno: any;
      retorno = JSON.parse(localStorage.getItem('eventos'));
      this.preencheEventosFromLocalStorage(retorno);

    }else{
      var eventos: Evento[] = [
        new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO'),
        new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI'),
        new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC')
      ];
      localStorage.setItem('eventos', JSON.stringify(eventos));
    }

  }

  preencheEventosFromLocalStorage(retorno: any[]): void{
    var array: string[];
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
      this.eventos.push(objEvento);

      // this.eventos.push(objEvento);
    }
  }

  preencherNovoEvento(): void {
    this.evento = new Evento(0, "", "");
  }

  mostrarDetalhes(evento: Evento) : void {
    this.eventoSelecionado = evento;
  }

  deletar(evento: Evento): void{
    var posicao: number;
    posicao = this.eventos.indexOf(evento);
    this.eventos.splice(posicao, 1);
    localStorage.setItem('eventos', JSON.stringify(this.eventos));
  }

  editar(evento: Evento): void{
    this.evento = evento;
    this.editando = true;
  }

  onSubmit() : void {
    console.log(this.evento);
    if(!this.editando){
      console.log("teste");
      this.eventos.push(this.evento);
      localStorage.setItem('eventos', JSON.stringify(this.eventos));
      this.enviado = true;
    }
    else{
      var pos: number;
      pos = this.eventos.indexOf(this.evento);
      this.eventos[pos] = this.evento;
      localStorage.setItem('eventos', JSON.stringify(this.eventos));
      this.editando = false;
      this.editado = true;
    }
  }

  novoEvento() : void {
    this.preencherNovoEvento();
  }
}
