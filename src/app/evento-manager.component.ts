import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Evento } from './Evento';
import { Artigo } from './Artigo';
import { EventoManagerService } from './evento-manager.service';
import { EstadosService } from './estados.service';
import { CidadesService } from './cidades.service';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html',
    styleUrls: ['./evento-manager.component.css'],
    providers: [EventoManagerService, EstadosService, CidadesService]
})

export class EventoManagerComponent implements OnInit{
  eventoSelecionado: Evento = null;
  enviado: boolean = false;
  artigoEnviado: boolean = false;
  editando: boolean = false;
  editado: boolean = false;
  deletado: boolean = false;
  artigoDeletado: boolean = false;
  eventos: Evento[] = []; // Todos os eventos existentes
  eventosHome: Evento[] = []; // Eventos que serão apresentados na tela inicial
  teste: any;
  contIds: number = this.eventos.length;
  evento: Evento = new Evento(this.contIds + 1, '', '');
  tela: string = "home";
  telaAnterior: string;
  artigoEvento: Artigo;

  constructor(private eventoManagerService: EventoManagerService) {
  }


  ngOnInit(){
    this.eventoManagerService.getEventosFromFile()
      .subscribe(
        resposta => {
          this.eventos = resposta;
          this.atualizaEventosHome();
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );
  }




  atualizaContadorIds(): void{
    this.contIds = this.eventos.length;
  }

  atualizaEventosHome():void{
    this.eventosHome = [];
    console.log(this.eventos);
    if(this.eventos.length >= 3){
      for(let i in this.eventos){
        if(parseInt(i) <= 2){
          this.eventosHome.push(this.eventos[i]);
        }else{
          break; //quebra o laço de repetição após preencher o array eventosHome
        }
      }
    }
    else if(this.eventos.length > 0){
      for(let i in this.eventos){
        this.eventosHome.push(this.eventos[i]);
          }
    }
  }

  preencherNovoEvento(): void {
    this.evento = new Evento(this.contIds + 1, "", "");
  }

  preencherNovoArtigo(): void {
    this.artigoEvento = new Artigo("", [], "", []);
  }

  mostrarDetalhes(evento: Evento) : void {
    this.eventoSelecionado = evento;
  }

  deletar(evento: Evento): void{
    console.log(evento);
    var posicao: number;
    posicao = this.eventos.indexOf(evento);
    this.eventos.splice(posicao, 1);
    this.deletado = true;
    this.atualizaEventosHome();
  }
  deletarArtigo(artigo: Artigo){
    console.log(artigo);
    var posicao: number;
    posicao = this.eventoSelecionado.artigos.indexOf(artigo);
    this.eventoSelecionado.artigos.splice(posicao, 1);
    this.artigoDeletado = true;
  }

  editar(evento: Evento): void{
    this.evento = evento;
    this.editando = true;
  }

  onSubmitEvento() : void {
    if(!this.editando){
      this.eventos.push(this.evento);
      this.enviado = true;
    }
    else{
      var pos: number;
      pos = this.eventos.indexOf(this.evento);
      this.eventos[pos] = this.evento;
      this.editando = false;
      this.editado = true;
    }
    if(this.eventos.length <= 3){
      this.atualizaEventosHome();
    }
  }

  onSubmitArtigo(){

  }


  novoEvento() : void {
    this.preencherNovoEvento();
  }

  novoArtigo(){
    this.preencherNovoArtigo();
  }
}
