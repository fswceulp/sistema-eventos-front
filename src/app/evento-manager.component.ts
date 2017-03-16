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
  eventoExcluir: Evento = null;
  evento: Evento = new Evento(0, '','','','','','','','');
  enviado: boolean = false;
  editado: boolean = false;
  pos:any;
  modo = "home";
/*(id, nome, sigla, inicio, termino, url, cidade, estado, local)*/
  constructor() {
    this.eventos = [
      new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO','15-05-2017','18-05-2017','http://ulbra-to.br/encoinfo/site/','Palmas','TO','CEULP/ULBRA'),
      new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI','05-06-2017','08-06-2017','http://sbsi2017.dcc.ufla.br/','Lavras','MG','UFLA'),
      new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC','02-06-2017','06-06-2017','http://csbc2017.mackenzie.br/','São Paulo','SP','Universidade Presbiteriana Mackenzie'),
      new Evento(4, 'XXXVIII Congresso da Sociedade Brasileira de Computação', 'CSBC - 2','02-06-2018','06-06-2018','http://csbc2017.mackenzie.br/','São Paulo','SP','Universidade Presbiteriana Mackenzie'),
      new Evento(5, 'XIV Simpósio Brasileiro de Sistemas de Informação', 'SBSI - 2','05-06-2018','08-06-2018','http://sbsi2017.dcc.ufla.br/','Lavras','MG','UFLA'),
    ];
  }

  preencherNovoEvento(): void {
    this.evento = new Evento(0,"","","","","","","","");
  }

  mostrarDetalhes(evento: Evento) : void {
    this.eventoSelecionado = evento;
    this.modo = "visualizar";
    this.pos=this.eventos.indexOf(evento);
  }

  onSubmit() : void {
    console.log(this.evento);
    this.eventos.push(this.evento);
    this.enviado = true;
    this.modo = "eventos";
    this.eventoSelecionado= null;
  }

  novoEvento() : void {
    this.preencherNovoEvento();
    this.enviado = false; 
    this.eventoEditar = null;
    this.editado = false;
    this.modo = "cadastrar";
  }

  alterar(){
     console.log(this.evento);
     this.eventos[this.pos] = this.evento;
     this.eventoSelecionado = this.evento;
     this.editado = true;
     this.modo = "visualizar";
  }

  excluirEvento(evento: Evento){
    this.modo = "eventos";
    this.eventos.splice(this.pos,1)
  }

  listarEventos(){
    this.modo = "eventos";
    this.eventoSelecionado= null;
  }

  cadastrar(){
    this.preencherNovoEvento();
    this.modo = "cadastrar";
    this.eventoSelecionado = null;
  }

  home(){
    this.modo = "home";
  }

  excluir(){
    this.modo = "excluir";
  }

  editar(evento: Evento){
    this.modo = "editar";
    this.eventoEditar = new Evento(evento.id, evento.nome, evento.sigla, evento.inicio, evento.termino, evento.url, evento.cidade, evento.estado, evento.local);
    this.evento = this.eventoEditar;
  }
}
