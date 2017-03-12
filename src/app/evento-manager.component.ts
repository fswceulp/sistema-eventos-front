import { Component } from '@angular/core';
import { Evento } from './Evento';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html'
})
export class EventoManagerComponent {
  eventos: Evento[];
  eventoSelecionado: Evento = null;
  evento: Evento = new Evento(0, "", "", '', '', '', '', '', '');
  enviado: boolean = false;
  eventoEditar: boolean = false;
  eventoBackup: Evento = null;

  constructor() {
    this.eventos = [
      new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO','01/01/2017','01/02/2017','www.ecoinfo.com.br','Palmas','Tocantins','Auditório Ulbra'),
      new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI','01/01/2017','05/03/2017','www.sbsi.com.br','Palmas','Tocantins','Auditório Ulbra'),
      new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC','01/01/2017','15/03/2017','www.csbc.com.br','Palmas','Tocantins','Auditório Ulbra')
    ];
  }
  novoEvento() : void {
    this.preencherNovoEvento();
  }
  preencherNovoEvento(): void {
    this.evento = new Evento(0, "", "", '', '', '', '', '', '');
  }
  editarEvento(evento: Evento): void{
	  this.eventoEditar = true;
	  this.evento = evento;
	  this.eventoBackup = evento;
  }
  mostrarDetalhes(evento: Evento) : void {
    this.eventoSelecionado = evento;
  }
  onSubmit() : void {
	  if(this.eventoEditar){
		  this.eventos.splice(this.eventos.indexOf(this.eventoBackup),1,this.evento);
		  this.eventoEditar = false;
		  this.enviado = true;
	  }else{
			console.log(this.evento);
			this.eventos.push(this.evento);
			this.enviado = true;
	  }
  }
  excluirEvento(evento:Evento):void {
        this.eventos.splice(this.eventos.indexOf(evento),1);
    }
}
