import { Component } from '@angular/core';
import { Evento } from './Evento';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html'
})
export class EventoManagerComponent {
  eventos: Evento[];
  eventoSelecionado: Evento = null;
  eventoEditado:Evento = null;
  editado:boolean = false;
  evento: Evento = new Evento(0, "", "", '', '', '', '', '', '');
  enviado: boolean = false;
  excluir: boolean = false;
  texto: string = 'this is sample text';

  constructor() {
    this.eventos = [
      new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO', '2017-03-04', '2017-03-06', 'http://ulbra-to.br/encoinfo/site/', 'Palmas', 'TO', 'CEULP'),
      new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI', '2017-04-20', '2017-04-25', 'http://sbsi2016.ufsc.br/', 'Florianópolis', 'SC', 'Castelmar'),
      new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC', '2017-05-15', '2017-05-20', 'http://csbc2017.mackenzie.br/', 'São Paulo', 'SP', 'Mackenzie')
    ];
  }

  preencherNovoEvento(): void {
    this.evento = new Evento(0, "", "", '', '', '', '', '', '');
  }
  
  editarEvento(evento: Evento) : void{
    this.evento = evento;
	this.editado = true;
    this.eventoEditado = evento;
  }
  
  excluirEvento(evento: Evento) : void {
	this.excluir = confirm("Deseja excluir o evento?");
	if(this.excluir){
		this.eventos.splice(this.eventos.indexOf(evento), 1);			
	}
  }

  onSubmit() : void {
    console.log(this.evento);
	if(this.editado){
		this.eventos.splice(this.eventos.indexOf(this.eventoEditado),1,this.eventoEditado);
		this.editado = false;
    }
    else{
		this.eventos.push(this.evento);
	}
    this.enviado = true;
  }

  novoEvento() : void {
	this.editado = false;
    this.preencherNovoEvento();
  }
}
