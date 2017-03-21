import { Evento } from './Evento';
import {Component, OnInit} from '@angular/core';
import {EventosService} from './eventos.service';
import './rxjs-operators';

@Component({
  selector: 'evento-manager',
  templateUrl: './evento-manager.component.html',
  providers: [EventosService]
})
export class EventoManagerComponent implements OnInit{
  eventos:any[];
  errorMessage:string;

  eventoSelecionado: Evento = null;
  evento: Evento = new Evento(0, '', '', '', '', '', '', '', '', '');
  
  enviado: boolean = false;
  atualizado: boolean = false;
  editar: boolean = true;
  home: boolean = false;
  cadastro: boolean = false;
  eventosexistentes: boolean = false;
  detalhes: boolean = true;

  constructor(private eventosService:EventosService) {}

  ngOnInit() {
      this.eventosService.eventos().subscribe(eventos => this.eventos = eventos);
      console.log("Eventos", this.eventos);
  }

  onSubmit() : void {
    console.log(this.evento);
    this.eventosService.criar(this.evento.id, this.evento.nome, this.evento.sigla, this.evento.inicio, this.evento.termino, this.evento.url, this.evento.cidade, this.evento.estado, this.evento.local, this.evento.imagem)
       .subscribe(
          evento  => this.eventos.push(evento),
          error =>  this.errorMessage = <any>error
       );
    this.enviado = true;
  }

  onEditar() : void{
    var ind = 1;
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
