import { Component, OnInit } from '@angular/core';
import { Evento } from './Evento';
import { Http } from '@angular/http';
import { EventoManagerService } from './evento-manager.service';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html',
    styleUrls: ['./evento-manager.component.css'],
    providers: [Http]
})
export class EventoManagerComponent implements OnInit {
  
  eventos : Evento[];
  eventoSelecionado: Evento = null;
  quantidade: number;
  eventoExcluir: Evento = null;
  eventoEditar: Evento = null;
  idAtual: number = 3;
  evento: Evento = new Evento(this.idAtual+1, '', '', '','','','','','');
  enviado: boolean = true;
  tela: string = "home";
  msg: string = "";
  editar: boolean = false;
  posEditar: number;

 
  constructor(private eventoManagerService: EventoManagerService) {}

  ngOnInit(){
    this.eventoManagerService.getEventos()
      .subscribe(
        resEventos => {
          this.eventos = resEventos;
          this.quantidade = this.eventos.length;
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );
  }

  preencherNovoEvento(): void {
    this.evento = new Evento(this.idAtual + 1, '', '', '','','','','','');
  }

  mostrarDetalhes(evento: Evento) : void {
    this.eventoSelecionado = evento;
  }

  onSubmit() : void {
    console.log(this.evento);
    if(this.editar)
    {
      this.eventos.splice(this.posEditar,1, this.evento);
      this.posEditar = null;
      this.msg = "editado";
      this.tela = "evento";
      this.editar = false;
    }
    else{
      this.eventos.push(this.evento);
      this.idAtual = this.evento.id;
      this.msg = "cadastrado";
      this.tela = "eventos";
      this.quantidade ++;
    }    
    this.enviado = true;
  }

  novoEvento() : void {
    this.preencherNovoEvento();
  }

  editarEvento(evento: Evento){
    this.eventoEditar = evento;
    this.posEditar = this.eventos.indexOf(this.eventoEditar);
    
    this.evento.id = this.eventoEditar.id;
    this.evento.nome = this.eventoEditar.nome;
    this.evento.sigla = this.eventoEditar.sigla;
    this.evento.inicio = this.eventoEditar.inicio;
    this.evento.termino = this.eventoEditar.termino;
    this.evento.url = this.eventoEditar.url;
    this.evento.cidade = this.eventoEditar.cidade;
    this.evento.estado = this.eventoEditar.estado;
    this.evento.local = this.eventoEditar.local;
    
    this.editar = true;
  }

  excluirEvento(evento: Evento): void{
    this.eventoExcluir = evento;
    let pos = this.eventos.indexOf(this.eventoExcluir);
    this.eventos.splice(pos,1);
    this.eventoSelecionado = null;
    this.quantidade --;
  }
}