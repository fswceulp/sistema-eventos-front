import { Component } from '@angular/core';
import { Evento } from './Evento';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html'
})
export class EventoManagerComponent {
  eventos: Evento[];
  eventoSelecionado: Evento = null;
  evento: Evento = new Evento(0, '', '', '', '', '', '', '', '');
  enviado: boolean = false;
  excluir: boolean = false;
  editado: boolean = false;
  editaEvento : Evento = null;

  constructor() {
    this.eventos = [
      new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO', '01/01/2017', '10/01/2017', 'www.google.com.br',
      'Palmas', 'Tocantins', 'Teatro Fernanda Montenegro'),
      new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI', '01/01/2017', '10/01/2017', 'www.google.com.br',
      'Palmas', 'Tocantins', 'Teatro Fernanda Montenegro'),
      new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC', '01/01/2017', '10/01/2017', 'www.google.com.br',
      'Palmas', 'Tocantins', 'Teatro Fernanda Montenegro'),
    ];
  }

  preencherNovoEvento(): void {
    this.evento = new Evento(0, "", "", "", "", "", "", "", "");
  }

  mostrarDetalhes(evento: Evento) : void {
    this.eventoSelecionado = evento;
  }

  excluirEvento(evento: Evento) : void {
    this.excluir = confirm("Tem certeza que deseja excluir o evento?");
    if(this.excluir){
        this.eventos.splice(this.eventos.indexOf(evento), 1);
      }
  }
  editarEvento(evento: Evento) : void {
    this.evento = evento;
    this.editado = true;
    this.editaEvento = evento;
  }

  onSubmit() : void {
    console.log(this.evento);
    if(this.editado){
		  this.eventos.splice(this.eventos.indexOf(this.editaEvento),1,this.editaEvento);
		  this.editado = false;
    }
    else{
		  this.eventos.push(this.evento);
    }
    this.enviado = true;
  }

  novoEvento() : void {
    this.editado = false;
    this.preencherNovoEvento();
  }
}
