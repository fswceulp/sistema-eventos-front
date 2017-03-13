import { Component } from '@angular/core';
import { Evento } from './Evento';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html'
})
export class EventoManagerComponent {
  eventos: Evento[];
  eventoSelecionado: Evento = null;
  edicao: boolean = false;
  eventoEditar: Evento = null;
  evento: Evento = new Evento(0, '', '', '', '', '', '', '', '');
  enviado: boolean = false;

  constructor() {
    this.eventos = [
      new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO', '15/05/2017', '18/03/2017', 'http://www.encoinfo.com.br', 'Palmas', 'Tocantins', 'Centro Universitário Luterano de Palmas' ),
      new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI',  '05/06/2017', '08//2017', 'http://sbsi2017.dcc.ufla.br', 'Lavras', 'Minas Gerais', 'Universidade Federal de Lavras' ),
      new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC',  '02/07/2017', '06/07/2017', 'http://csbc2017.mackenzie.br', 'Higienópolis', 'São Paulo', 'Universidade Presbiteriana Mackenzie' )
    ];
  }

  preencherNovoEvento(): void {
    this.evento = new Evento(0, '', '', '', '', '', '', '', '');;
  }

  mostrarDetalhes(evento: Evento) : void {
    if(this.eventoSelecionado){
      this.eventoSelecionado = null;  
    }
    else{
      this.eventoSelecionado = evento;
    }
  }

  editarEvento(evento: Evento) : void {
    this.eventoEditar = evento;
    this.evento = this.eventoEditar;
    this.edicao = true;
  }

  excluirEvento(evento: Evento): void {
    this.eventos.splice(this.eventos.indexOf(evento),1);
  }

  onSubmit() : void {
    console.log(this.evento);
    if(this.edicao){
      this.eventos.splice(this.eventos.indexOf(this.eventoEditar),1,this.eventoEditar);
      this.edicao = false;
    }
    else {
      this.eventos.push(this.evento);
    }
    this.enviado = true;
  }

  novoEvento() : void {
    this.preencherNovoEvento();
  }
}
