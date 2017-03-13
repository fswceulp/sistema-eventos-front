import { Component } from '@angular/core';
import { Evento } from './Evento';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html'
})
export class EventoManagerComponent {
  eventos: Evento[];
  eventoSelecionado: Evento = null;
  eventoEditar: Evento = null;
  idEvento: number = 3;
  evento: Evento = new Evento(0, '', '');
  enviado: boolean = false;
  editar: boolean = false;
  editado: boolean = false;

  constructor() {
    this.eventos = [
      new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO'),
      new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI'),
      new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC')
    ];
  }

  preencherNovoEvento(): void {
    this.evento = new Evento(this.idEvento+1, "", "", "","","","","","");
  }

  mostrarDetalhes(evento: Evento) : void {
    this.eventoSelecionado = evento;
  }

  onSubmit() : void {
    console.log(this.evento);
    if(this.editar){
      var posicao = this.eventos.indexOf(this.eventoEditar);
      this.eventos[posicao] = this.evento;
      this.editado = true;
      this.novoEvento();
    }
    else{
      this.eventos.push(this.evento);
      this.enviado = true;
    }

  }

  esconderMensagem(): void{
    this.editado = false;
  }

  novoEvento() : void {
    this.preencherNovoEvento();
  }

  editarEvento(evento: Evento){
      this.eventoEditar = evento;

      this.evento.nome = evento.nome;
      this.evento.sigla = evento.sigla;
      this.evento.inicio = evento.inicio;
      this.evento.termino = evento.termino;
      this.evento.url = evento.url;
      this.evento.cidade = evento.cidade;
      this.evento.estado = evento.estado;
      this.evento.local = evento.local;
      this.editar = true;

  }

  excluirEvento(evento: Evento) : void{
    var posicao = this.eventos.indexOf(evento);
    this.eventos.splice(posicao, 1);
  }
}
