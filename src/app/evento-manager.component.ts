import { Component, OnInit } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { EventoService } from './evento.service';
import { Evento } from './Evento';


@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html',
    providers: [ EventoService ]
})

export class EventoManagerComponent implements OnInit {
  eventos: Evento[];
  principaisEventos: Evento[];
  eventoSelecionado: Evento = null;
  edicao: boolean = false;
  eventoEditar: Evento = null;
  evento: Evento = new Evento(0, '', '', '', '', '', '', '', '');
  enviado: boolean = false;
  qtdEventos: number;
  home: boolean = true;
  visualizar = false; 
  eventos_all = false; 
  cadastrar_eventos = false; 
  confirmar_excluir = false;

  constructor(private eventoService: EventoService) {
  }

  ngOnInit(){
    this.eventoService.getEventos().subscribe(eventos =>{this.eventos = eventos; this.qtdEventos = this.eventos.length});
    this.preencherPrincipaisEventos();
  }

  preencherPrincipaisEventos(): any{
    for(let i = 0; i < 3; i++) {
        this.principaisEventos = this.eventos;
    }
    return this.principaisEventos;
  }

  preencherNovoEvento(): void {
    this.evento = new Evento(0, '', '', '', '', '', '', '', '');;
  }

  mostrarDetalhes(evento: Evento) : void {
      this.eventoSelecionado = evento;
  }

  editarEvento(evento: Evento) : void {
    this.eventoEditar = evento;
    this.evento = this.eventoEditar;

    this.edicao = true;
  }

  excluirEvento(evento: Evento): void {
    this.eventos.splice(this.eventos.indexOf(evento),1);
  }

  onSubmit() : void {
    console.log(this.evento);
    if(this.edicao){
      this.eventos.splice(this.eventos.indexOf(this.eventoEditar),1,this.eventoEditar);
      this.edicao = false;
    }
    else {
      this.eventos.push(this.evento);
    }
  }

  novoEvento() : void {
    this.preencherNovoEvento();
  }

}
