import { Component } from '@angular/core';
import { Evento } from './Evento';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html'
})
export class EventoManagerComponent {
  eventos: Evento[];
  eventoSelecionado: Evento = null;
  id: number = 3;
  evento: Evento = new Evento(this.id+1, '', '', '','','','','','');
  enviado: boolean = false;
  pos: number;

  constructor() {
    this.eventos = [
      new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO','15-05-2017','18-05-2017','http://ulbra-to.br/encoinfo/site/','Palmas','TO','CEULP/ULBRA'),
      new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI','05-06-2017','08-06-2017','http://sbsi2017.dcc.ufla.br/','Lavras','MG','UFLA'),
      new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC','02-06-2017','06-06-2017','http://csbc2017.mackenzie.br/','São Paulo','SP','Universidade Presbiteriana Mackenzie')
    ];
  }

  preencherNovoEvento(): void {
    this.evento = new Evento(this.id + 1, '', '', '','','','','','');
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
  editarEvento(evento: Evento){
    
    this.pos = this.eventos.indexOf(evento);
    this.evento.id = evento.id;
    this.evento.nome = evento.nome;
    this.evento.sigla = evento.sigla;
    this.evento.inicio = evento.inicio;
    this.evento.termino = evento.termino;
    this.evento.url = evento.url;
    this.evento.cidade = evento.cidade;
    this.evento.estado = evento.estado;
    this.evento.local = evento.local;
    this.eventos.splice(this.pos,1, this.evento);
 
  }
  
  excluirEvento(evento: Evento): void{
    let pos = this.eventos.indexOf(evento);
    this.eventos.splice(pos,1);
  }
}
