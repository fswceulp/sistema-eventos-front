import { Component } from '@angular/core';
import { Evento } from './Evento';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html'
})
export class EventoManagerComponent {
  eventos: Evento[];
  eventoSelecionado: Evento = null;
  evento: Evento = new Evento(0, '', '');
  enviado: boolean = false;

  constructor() {
    this.eventos = [
      new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO'),
      new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI'),
      new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC')
    ];
  }

  preencherNovoEvento(): void {
    this.evento = new Evento(0, "", "", "", "", "", "","", "");
  }

  mostrarDetalhes(evento: Evento) : void {
    this.eventoSelecionado = evento;
  }

  onSubmit() : void {
    console.log(this.evento);
    this.eventos.push(this.evento);
    this.enviado = true;
  }

  novoEvento() : void {
    this.preencherNovoEvento();
  }

  /*-------------------------------------------------------------------------------------------------*/

  deletar(id: Evento) : void {
    var variavel;

    this.eventos.forEach(function (evento, index) {
     if(evento.id == id){
        console.log(index);
          //this.eventos.splice(index, 1);
          variavel=index;
      }
    })
    this.eventos.splice(variavel, 1);
  }
}
