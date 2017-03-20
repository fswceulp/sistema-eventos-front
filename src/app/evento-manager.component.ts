import { Component } from '@angular/core';
import { Evento } from './Evento';
import { Http, Response , Headers} from '@angular/http';
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
  modulo: String = 'home';

  constructor() {
    this.eventos = [
      new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO','01/01/2017','01/02/2017','www.ecoinfo.com.br','Palmas','Tocantins','Auditório Ulbra'),
      new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI','01/01/2017','05/03/2017','www.sbsi.com.br','Palmas','Tocantins','Auditório Ulbra'),
      new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC','01/01/2017','15/03/2017','www.csbc.com.br','Palmas','Tocantins','Auditório Ulbra'),
	  new Evento(4, 'Brasil Game Show', 'BGS','01/01/2017','05/03/2017','www.bgs.com.br','Palmas','Tocantins','Auditório Ulbra'),
	  new Evento(5, 'Gamescom', 'SBSI','01/01/2017','05/03/2017','www.Gamescom.com.br','Palmas','Tocantins','Auditório Ulbra'),
	  new Evento(6, 'Game Developers Conference', 'GDC','01/01/2017','05/03/2017','www.gdc.com.br','Palmas','Tocantins','Auditório Ulbra'),
	  new Evento(7, 'Campus party', 'CP','01/01/2017','05/03/2017','www.campusparty.com.br','Palmas','Tocantins','Auditório Ulbra'),
	  new Evento(8, 'Campus party experience', 'CPEX','01/01/2017','05/03/2017','www.campusparty.com.br','Palmas','Tocantins','Auditório Ulbra')
    ];
  }
  /*lerArquivo('lereventos', function($scope, $http)):void{
  $http.get("http://localhost:8080/eventos/eventos.json").then(function (response) {
      $scope.myData = response.data.records;
	}
  }*/
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
	  this.modulo="form";
  }
  mostrarDetalhes(evento: Evento) : void {
    this.eventoSelecionado = evento;
	this.modulo="eventodetais";
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
