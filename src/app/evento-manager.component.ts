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
  edicaoEvento: Evento;
  enviado: boolean = false;
  editando: boolean = false;
  editado: boolean = false;

  constructor() {
    this.eventos = [
      new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO'),
      new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI'),
      new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC')
    ];
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
  }

  editar(evento: Evento): void{
    this.edicaoEvento = new Evento(evento.id, evento.nome, evento.sigla, evento.inicio, evento.termino, evento.url, evento.cidade, evento.estado, evento.local);
    this.evento = this.edicaoEvento;
    this.editando = true;
  }

  onSubmit() : void {
    console.log(this.evento);
    if(!this.editando){
      console.log("teste");
      this.eventos.push(this.evento);
      this.enviado = true;
    }
    else{
      var pos: number;
      pos = this.eventos.indexOf(this.edicaoEvento);
      this.eventos[pos] = this.evento;
      this.editando = false;
      this.editado = true;
    }
  }

  novoEvento() : void {
    this.preencherNovoEvento();
  }
}
