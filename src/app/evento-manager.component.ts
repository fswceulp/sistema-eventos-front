import { Component } from '@angular/core';
import { Evento } from './Evento';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html'
})


export class EventoManagerComponent {
  eventos: Evento[];
  eventoSelecionado: Evento = null;
  eventoExcluir: Evento = null;
  eventoEditar: Evento = null;
  idAtual: number = 4;
  evento: Evento = new Evento(this.idAtual+1, "", "", "", "", "", "", "", "");
  edicaoEvento: Evento;
  enviado: boolean = false;
  editar: boolean = false;
  posEditar: number;
  tela: string = "home";
  constructor() {
    this.eventos = [
      new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO','21:20h', '23h', 'www.prontoEvento.com', 'Palmas', 'Tocantins', 'CEULP/ULBRA'),
      new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI', '21:20h', '23h', 'www.prontoEvento.com', 'Palmas', 'Tocantins', 'CEULP/ULBRA'),
      new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC', '21:20h', '23h', 'www.prontoEvento.com', 'Palmas', 'Tocantins', 'CEULP/ULBRA'),
      new Evento(4, 'Jornada de Empreendedorismo', 'SEBRAE', '21:20h', '23h', 'www.sebrae.com.br', 'Palmas', 'Tocantins', 'SEBRAE')
    ];
  }


  preencherNovoEvento(): void {
    this.evento = new Evento(0, "", "", "", "", "", "", "", "");
  }

  mostrarDetalhes(evento: Evento) : void {
    this.eventoSelecionado = evento;
  }


  onSubmit() : void {
    console.log(this.evento);
    if(this.editar)
    {
      this.eventos[this.posEditar] = this.evento;
      this.posEditar = null;
    }
    else{
      this.eventos.push(this.evento);
      this.idAtual = this.evento.id;
    }    
    this.enviado = true;
  }


  novoEvento() : void {
    this.preencherNovoEvento();
  }


  excluirEvento(evento: Evento): void
  {
    this.eventoExcluir = evento;
    let pos = this.eventos.indexOf(this.eventoExcluir);
    this.eventos.splice(pos, 1);
    this.eventoSelecionado = null;
  }


  editarEvento(evento: Evento)
  {
   /* this.evento = evento;*/
    this.eventoEditar = evento;
    this.posEditar = this.eventos.indexOf(this.eventoEditar);
    this.evento.id = this.eventoEditar.id;
    this.evento.nome = this.eventoEditar.nome;
    this.evento.sigla = this.eventoEditar.sigla;
    this.evento.inicio = this.eventoEditar.inicio;
    this.evento.termino = this.eventoEditar.termino;
    this.evento.url = this.eventoEditar.url;
    this.evento.cidade = this.eventoEditar.cidade;
    this.evento.estado = this.eventoEditar.estado;
    this.evento.local = this.eventoEditar.local;

    this.editar = true;
  }
}
