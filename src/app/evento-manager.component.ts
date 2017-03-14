import { Component } from '@angular/core';
import { Evento } from './Evento';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html'
})
export class EventoManagerComponent {
  eventos: Evento[];
  ult: Evento[];
  eventoSelecionado: Evento = null;
  eventoEditar: Evento = null;
  idEvento: number = 4;
  evento: Evento = new Evento(0, '', '');
  enviado: boolean = false;
  editado: boolean = false;
  home: boolean = true;
  eventosb: boolean = false;
  eventob: boolean = false;
  cadastrar: boolean = false;
  editar: boolean = false;  

  constructor() {
    this.eventos = [
      new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO', '20/03/2016', '20/03/2016', 'google.com', 'Palmas', 'Tocantins', 'CEULP'),
      new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI', '20/03/2016', '20/03/2016', 'google.com', 'Palmas', 'Tocantins', 'CEULP'),
      new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC', '20/03/2016', '20/03/2016', 'google.com', 'Palmas', 'Tocantins', 'CEULP'),
	  new Evento(4, 'XXXVII Congresso de TESTE TESTE', 'TESTE', '20/03/2016', '20/03/2016', 'google.com', 'Palmas', 'Tocantins', 'CEULP')
    ];
  }
  
    public inicio : string;
    public termino : string;
    public url : string;
    public cidade : string;
    public estado : string;
    public local : string;
  clickHome(): void{
    this.home = true;
    this.eventosb= false;
	this.eventob= false;
	this.cadastrar = false;
	this.editar = false;  
  }
  clickEventos(): void{
    this.home = false;
    this.eventosb= true;
	this.eventob= false;
	this.cadastrar = false;
	this.editar = false;  
  }
  clickEvento(evento: Evento): void{
	this.eventoSelecionado = evento;
    this.home = false;
    this.eventosb= false;
	this.eventob= true;
	this.cadastrar = false;
	this.editar = false;  
  }
  clickCadastrar(): void{
    this.home = false;
    this.eventosb= false;
	this.eventob= false;
	this.cadastrar = true;
	this.editar = false;  
  }
  clickEditar(): void{
    this.home = false;
    this.eventosb= false;
	this.eventob= false;
	this.cadastrar = false;
	this.editar = true;  
  }
  

  preencherNovoEvento(): void {
    this.evento = new Evento(this.idEvento+1, "", "", "","","","","","");
  }

  mostrarDetalhes(evento: Evento) : void {
    this.eventoSelecionado = evento;
  }

  onSubmit() : void {
    console.log(this.evento);
    if(this.editado){
      var posicao = this.eventos.indexOf(this.eventoEditar);
      this.eventos[posicao] = this.evento;
      this.enviado = true;
    }
    else{
      this.eventos.push(this.evento);
      this.enviado = true;
    }
	this.evento = new Evento(this.idEvento+1, "", "", "","","","","","");
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
      this.editado = true;

  }

  excluirEvento(evento: Evento) : void{
	  if(confirm("Confirme se deseja realmente excluir o evento")){
		var posicao = this.eventos.indexOf(evento);
		this.eventos.splice(posicao, 1);
		confirm("Evento excluido com sucesso!")
	  }
	}
  }
