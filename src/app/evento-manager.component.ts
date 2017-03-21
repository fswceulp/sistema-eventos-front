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
  enviado: boolean = false;
  ocultarCadastrar: boolean = true;
  ocultarEvento: boolean = true;
  verTodos: boolean = true;
  eventoInd: boolean = false;
  eventoIndividual: boolean = true;
  confirmarr: Evento = null;

  constructor() {
    this.eventos = [
      new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO'),
      new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI'),
      new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC'),
      new Evento(4, 'XXII Congresso da Associação de Programadores', 'CAP')
    ];
  }

  preencherNovoEvento(): void {
    this.evento = new Evento(0, "", "", "", "", "", "","", "");
  }

  mostrarDetalhes(evento: Evento) : void {
    this.eventoIndividual = !this.eventoIndividual;
    this.eventoSelecionado = evento;
    this.verTodos = true;
  }

  mainController(){
    $scope.goCats = false;
  }

  onSubmit() : void {
    console.log(this.evento);
    this.eventos.push(this.evento);
    this.enviado = true;
  }

  onClick() : void {
    alert('Botão Clicado!');
  }

  ocultarCadastro() : void {
    //this.ocultarCadastrar = !this.ocultarCadastrar;
    this.ocultarCadastrar = false;
    this.ocultarEvento = true;
    this.verTodos = true;
  }

  ocultarEventos() : void {
    //this.ocultarEvento = !this.ocultarEvento;
    this.ocultarEvento = !this.ocultarEvento;
    this.ocultarCadastrar = true;
    this.verTodos = true;
    this.eventoIndividual = true;
  }

  ocultarVerTodos() : void {
    this.verTodos = !this.verTodos;
    this.ocultarEvento = true;
    //this.ocultarCadastrar = false;
  }

  novoEvento() : void {
    this.preencherNovoEvento();
  }

  eventoIndividual(evento: Evento) : void {
    this.eventoIndd=evento;
    this.eventoInd=true;
    this.ocultarEvento =false;
  }

  confirmar(evento: Evento) : void {
    this.confirmarr=evento;
    this.eventoIndividual = true;
  }

  /*-------------------------------------------------------------------------------------------------*/

  deletar(id: Evento) : void {
    var variavel;

    this.eventos.forEach(function (evento, index) {
     if(evento.id == id){
        console.log(index);
          //this.eventos.splice(index, 1);
          variavel=index;
      }
    })
    this.eventos.splice(variavel, 1);
    this.eventoIndividual = true;
    this.ocultarEvento = !this.ocultarEvento;
    this.confirmarr = Evento = null;
  }

  true(): void {
    
    return true;
  }
}
