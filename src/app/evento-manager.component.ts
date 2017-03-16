import { Component } from '@angular/core';
import { Evento } from './Evento';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html',
    styleUrls: ['./evento-manager.component.css']
})
export class EventoManagerComponent {
  eventos: Evento[];
  eventoSelecionado: Evento = null;
  eventoExcluir: Evento = null;
  eventoEditar: Evento = null;
  idAtual: number = 3;
  evento: Evento = new Evento(this.idAtual+1, '', '', '','','','','','');
  enviado: boolean = true;
  tela: string = "home";
  msg: string = "";
  editar: boolean = false;
  posEditar: number;

 constructor() {
    this.eventos = [
      new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO','15-05-2017','18-05-2017','http://ulbra-to.br/encoinfo/site/','Palmas','TO','CEULP/ULBRA'),
      new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI','05-06-2017','08-06-2017','http://sbsi2017.dcc.ufla.br/','Lavras','MG','UFLA'),
      new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC','02-06-2017','06-06-2017','http://csbc2017.mackenzie.br/','São Paulo','SP','Universidade Presbiteriana Mackenzie'),
      new Evento(4, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'teste','05-06-2017','08-06-2017','http://sbsi2017.dcc.ufla.br/','Lavras','MG','UFLA'),
      new Evento(5, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'teste2','02-06-2017','06-06-2017','http://csbc2017.mackenzie.br/','São Paulo','SP','Universidade Presbiteriana Mackenzie')
    ];
  }

  preencherNovoEvento(): void {
    this.evento = new Evento(this.idAtual + 1, '', '', '','','','','','');
  }

  mostrarDetalhes(evento: Evento) : void {
    this.eventoSelecionado = evento;
  }

  onSubmit() : void {
    console.log(this.evento);
    if(this.editar)
    {
      this.eventos.splice(this.posEditar,1, this.evento);
      this.posEditar = null;
      this.msg = "editado";
      this.tela = "evento";
      this.editar = false;
    }
    else{
      this.eventos.push(this.evento);
      this.idAtual = this.evento.id;
      this.msg = "cadastrado";
      this.tela = "eventos";
    }    
    this.enviado = true;
  }

  novoEvento() : void {
    this.preencherNovoEvento();
  }

  editarEvento(evento: Evento){
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

  excluirEvento(evento: Evento): void{
    this.eventoExcluir = evento;
    let pos = this.eventos.indexOf(this.eventoExcluir);
    this.eventos.splice(pos,1);
    this.eventoSelecionado = null;
  }
}