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
  editar: boolean = true;

  constructor() {
    this.eventos = [
      new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO', '21/03/2017', '23/03/2017', 'http://www.eventos.com.br', 'Palmas', 'Tocantins', 'Auditório da Ulbra'),
      new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI', '25/03/2017', '28/03/2017', 'http://www.eventos.com.br', 'Palmas', 'Tocantins', 'Auditório da Católica'),
      new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC', '10/04/2017', '12/04/2017', 'http://www.eventos.com.br', 'Gurupi', 'Tocantins', 'Auditório da UFT')
    ];
  }

  preencherNovoEvento(): void {
    this.evento = new Evento(0, '', '', '', '', '', '', '', '');
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

  onEditar() : void{
    var ind = 0;
    for (let e of this.eventos){
      if(e.id == this.evento.id){
        this.eventos[ind] = this.evento;
        console.log(this.eventos);
      }
      ind++;
    }
  }

  onDelete(new_evento: Evento){
    var ind = 0;
    for (let e of this.eventos){
      if(e.id == new_evento.id){
        this.eventos.splice(ind,1);
      }
      ind++;
    }
  }

  mostrarEditarEvento(new_evento: Evento) : void{
    this.enviado = true;
    this.editar = false;
    this.evento = new Evento(new_evento.id, new_evento.nome, new_evento.sigla, new_evento.inicio, new_evento.termino, new_evento.url, new_evento.cidade, new_evento.estado, new_evento.local);
  }
}
