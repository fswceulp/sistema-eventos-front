import { Component } from '@angular/core';
import { Evento } from './Evento';

@Component({
  selector: 'evento-manager',
  templateUrl: './evento-manager.component.html'
})
export class EventoManagerComponent {
  eventos: Evento[];
  eventoSelecionado: Evento = null;
  evento: Evento = new Evento(0, '', '', '', '', '', '', '', '', '');
  enviado: boolean = false;
  atualizado: boolean = false;
  editar: boolean = true;
  home: boolean = false;
  cadastro: boolean = false;
  eventosexistentes: boolean = false;
  detalhes: boolean = true;

  constructor() {
    this.eventos = [
      new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO', '21/03/2017', '23/03/2017', 'http://www.eventos.com.br', 'Palmas', 'TO', 'Auditório da Ulbra', 'https://image.freepik.com/free-vector/abstract-logo-with-colorful-leaves_1025-695.jpg'),
      new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI', '25/03/2017', '28/03/2017', 'http://www.eventos.com.br', 'Palmas', 'TO', 'Auditório da Católica', 'https://image.freepik.com/free-vector/abstract-logo-made-with-colorful-rings_1025-678.jpg'),
      new Evento(3, 'XXXVII Congresso da Sociedade de Computação', 'CSBC', '10/04/2017', '12/04/2017', 'http://www.eventos.com.br', 'Gurupi', 'TO', 'Auditório da UFT', 'https://image.freepik.com/free-vector/colorful-circular-logo_1025-395.jpg'),
      new Evento(4, 'XIX Encontro de Informática', 'ECOINFO', '10/08/2017', '15/08/2017', 'http://www.econinfo.com.br', 'Palmas', 'TO', 'Auditório da CEULP/ULBRA', 'https://image.freepik.com/vector-gratis/logo-abstracto-hecho-con-hojas_1025-263.jpg')
    ];
  }

  preencherNovoEvento(): void {
    this.evento = new Evento(0, '', '', '', '', '', '', '', '', '');
  }

  onSubmit() : void {
    console.log(this.evento);
    this.eventos.push(this.evento);
    this.enviado = true;
  }

  novoEvento() : void {
    this.preencherNovoEvento();
  }

  onEditar() : void{
    var ind = 0;
    for (let e of this.eventos){
      if(e.id == this.evento.id){
        this.eventos[ind] = this.evento;
        this.atualizado = true;
        console.log(this.eventos);
      }
      ind++;
    }
  }

  onDelete(new_evento: Evento){
    var ind = 0;
    for (let e of this.eventos){
      if(e.id == new_evento.id){
        this.eventos.splice(ind,1);
      }
      ind++;
    }
  }

  mostrarEditarEvento(new_evento: Evento) : void{
    this.enviado = false; //Ocultar Mensagem de Sucesso
    this.home = true; //Ocultar Home
    this.cadastro = false; //Ocultar Cadastro
    this.detalhes = true; //Oculta Detalhes
    this.enviado = false; //Ocultar Mensagem de Sucesso
    this.editar = false;
    this.eventosexistentes = false; //Ocultar Gerenciador de Eventos
    this.evento = new Evento(new_evento.id, new_evento.nome, new_evento.sigla, new_evento.inicio, new_evento.termino, new_evento.url, new_evento.cidade, new_evento.estado, new_evento.local, new_evento.imagem);
  }

  cadastraEventoTela(){
    this.enviado = false; //Ocultar Mensagem de Sucesso
    this.home = true; //Ocultar Home
    this.cadastro = true; //Mostrar Cadastro
    this.detalhes = true; //Oculta Detalhes
    this.editar = true;//Ocultar Editar
    this.eventosexistentes = false; //Ocultar Gerenciador de Eventos
    this.atualizado = false;
  }

  homeEventoTela(){
    this.enviado = false; //Ocultar Mensagem de Sucesso
    this.home = false; //Mostrar Home
    this.cadastro = false; //Ocultar Cadastro
    this.detalhes = true; //Oculta Detalhes
    this.editar = true;//Ocultar Editar
    this.eventosexistentes = false; //Ocultar Gerenciador de Eventos
    this.atualizado = false;
  }

  mostrarDetalhesTela(evento: Evento) : void {
    this.enviado = false; //Ocultar Mensagem de Sucesso
    this.home = true; //Ocultar Home
    this.detalhes = false;
    this.eventoSelecionado = evento;
    this.editar = true;//Ocultar Editar
    this.eventosexistentes = false; //Ocultar Gerenciador de Eventos
    this.cadastro = false; //Ocultar Cadastro
    this.atualizado = false;
  }

  gerenciarEventosTela(){
    this.eventosexistentes = true; //Mostra Gerenciador de Eventos
    this.enviado = false; //Ocultar Mensagem de Sucesso
    this.home = true; //Ocultar Home
    this.detalhes = true; //Ocultar Detalhes
    this.cadastro = false; //Ocultar Cadastro
    this.editar = true;//Ocultar Editar
    this.atualizado = false;
  }
}
