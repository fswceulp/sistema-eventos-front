import { Component } from '@angular/core';
import { Evento } from './Evento';
// import fs = require('fs');
// fs.readFile('src/app/arquivo,json', 'utf8');

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
  excluir: boolean = false;
  certeza: boolean = false;
  xhttp: any = new XMLHttpRequest();
  // tamanho: number = 0;
  
  constructor() {
    this.xhttp.onreadystatechange = function(){
        this.arq = JSON.parse(this.responseText);
        this.tamanho = this.arq.length;
    }
      this.xhttp.open("GET", "src/app/arquivo.json", true);
      this.xhttp.send();
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
	this.excluir = false;
	this.certeza = false;
  }
  clickEventos(): void{
    this.home = false;
    this.eventosb= true;
    this.eventob= false;
    this.cadastrar = false;
    this.editar = false;
	this.excluir = false;
	this.certeza = false;	
  }
  clickEvento(evento: Evento): void{
    this.eventoSelecionado = evento;
    this.home = false;
    this.eventosb= false;
    this.eventob= true;
    this.cadastrar = false;
    this.editar = false;
	this.excluir = false;
	this.certeza = false;
  }
  clickCadastrar(): void{
    this.home = false;
    this.eventosb= false;
    this.eventob= false;
    this.cadastrar = true;
    this.editar = false;
	this.excluir = false;
	this.certeza = false;
  }
  clickExcluir(): void{
    this.home = false;
    this.eventosb= false;
    this.eventob= false;
    this.cadastrar = false;
    this.editar = false;
	this.excluir = true;
	this.certeza = false;
  }
  clickCerteza(): void{
    this.home = false;
    this.eventosb= false;
    this.eventob= false;
    this.cadastrar = false;
    this.editar = false;
	this.excluir = false;
	this.certeza = true;
  }
  clickEditar(): void{
    this.home = false;
    this.eventosb= false;
    this.eventob= false;
    this.cadastrar = false;
    this.editar = true; 
	this.excluir = false;
	this.certeza = false;
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
      var posicao = this.xhttp.arq.indexOf(this.eventoEditar);
      this.xhttp.arq[posicao] = this.evento;
      this.enviado = true;
      this.editado = false;
    }
    else{
      this.xhttp.arq.push(this.evento);
      this.enviado = true;
      this.xhttp.tamanho = this.xhttp.tamanho + 1;
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
    var posix = this.xhttp.arq.indexOf(evento);
    this.xhttp.arq.splice(posix, 1);
    this.xhttp.tamanho = this.xhttp.tamanho - 1;
	}
  }