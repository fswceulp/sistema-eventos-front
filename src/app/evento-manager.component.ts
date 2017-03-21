import { Component, OnInit } from '@angular/core';
import { Evento } from './Evento';
import {Http} from '@angular/http';
import { EventoManagerService } from './evento-manager.service';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html',
    providers: [EventoManagerService]
})
export class EventoManagerComponent implements OnInit{
  eventos: Evento[];
  eventoSelecionado: Evento = null;
  eventoEditar: Evento = null;
  idEvento: number = 4;
  evento: Evento = new Evento(0, '', '');
  enviado: boolean = false;
  editar: boolean = false;
  editado: boolean = false;
  tresPrimeiros: Evento[] = [];

  // VARIÁVEIS PARA CONTROLE DE TELAS
  home: boolean= true;
  listaEventos: boolean = false;
  detalhesEvento: boolean = false;
  formularioCadastro: boolean = false;
  formularioEditar: boolean = false;
  confirmarExclusao: boolean = false;

  constructor(private eventoManagerService: EventoManagerService) {
  }

  ngOnInit(): void{
    this.eventoManagerService.getEventos().subscribe(eventos => {
      this.eventos = eventos;
      this.pegarTresPrimeiros();
    });
  }

  pegarTresPrimeiros(): void{
    // console.log(this.xhttp.eventosJson);
    this.tresPrimeiros = [];
    if(this.eventos.length>3){
      for(var i=0; i<3; i++){
        this.tresPrimeiros[i] = this.eventos[i];
      }
    }
    else{
      for(var i=0; i<this.eventos.length; i++){
        this.tresPrimeiros[i] = this.eventos[i];
      }
    }
  }

  preencherNovoEvento(): void {
    this.evento = new Evento(this.idEvento+1, "", "", "","","","","","");
  }

  mostrarDetalhes(evento: Evento) : void {
    this.eventoSelecionado = evento;
    this.selecionarTela("detalhes");
  }

  onSubmit() : void {
    console.log(this.evento);
    if(this.editar){
      var posicao = this.eventos.indexOf(this.eventoEditar);
      this.eventos[posicao] = this.evento;
      this.editado = true;
      this.selecionarTela("lista-eventos");
    }
    else{
      this.eventos.push(this.evento);
      this.enviado = true;
      this.selecionarTela("lista-eventos");
    }

  }

  esconderMensagem(): void{
    this.editado = false;
  }

  novoEvento() : void {
    this.preencherNovoEvento();
    this.selecionarTela("cadastro");
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
      this.editar = true;
      this.selecionarTela("editar");
  }

  excluirEvento(evento: Evento) : void{
    var posicao = this.eventos.indexOf(evento);
    this.eventos.splice(posicao, 1);
  }

  confirmarExlusao(): void{

  }

  selecionarTela(tela: string): void{
    if(tela=='lista-eventos'){
        this.resetTelas();
        this.listaEventos = true;
    }
    else if(tela == 'home'){
        this.pegarTresPrimeiros();
        this.resetTelas();
        this.home = true;
    }
    else if(tela == "detalhes"){
        this.resetTelas();
        this.detalhesEvento = true;
    }
    else if(tela == "cadastro"){
        this.resetTelas();
        this.formularioCadastro = true;
    }
    else if(tela == "editar"){
        this.resetTelas();
        this.formularioEditar = true;
    }
    else if(tela == "confirmarExclusao"){
        this.resetTelas();
        this.confirmarExclusao = true;
    }
    else{
        this.resetTelas();
    }
  }

  resetTelas(): void{
    this.home = false;
    this.listaEventos = false;
    this.detalhesEvento = false;
    this.formularioCadastro = false;
    this.formularioEditar = false;
    this.confirmarExclusao = false;
  }
}
