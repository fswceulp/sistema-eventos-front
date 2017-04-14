import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Evento } from './Evento';
import { Artigo } from './Artigo';
import { EventoManagerService } from './evento-manager.service';
import { EstadosService } from './estados.service';
import { CidadesService } from './cidades.service';
import { AutoresService } from './autores.service';
import { Autor } from './Autor';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html',
    styleUrls: ['./evento-manager.component.css'],
    providers: [EventoManagerService, EstadosService, CidadesService, AutoresService]
})

export class EventoManagerComponent implements OnInit{
  eventoSelecionado: Evento = null;
  enviado: boolean = false;
  artigoEnviado: boolean = false;
  editando: boolean = false;
  editandoArtigo: boolean = false;
  editado: boolean = false;
  artigoEditado: boolean = false;
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
  artigo: Artigo;
  autores : Autor[];
  autorAdd: Autor;
  autorSelecionado: Autor;
  autor: Autor;
  palavra: string;

  constructor(private eventoManagerService: EventoManagerService, private autoresService: AutoresService) {
  }


  ngOnInit(){
    this.eventoManagerService.getEventosFromFile()
      .subscribe(
        resposta => {
          this.eventos = resposta;
          console.log(this.eventos);
          this.atualizaEventosHome();
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );
      this.autoresService.all()
        .subscribe(
          resposta => {
            this.autores = resposta;
            console.log(this.autores);
          },
          error => console.error('Error: ' + error),
          () => console.log('Completed!')
      );
      // this.autores = this.autoresService.all();
  }




  atualizaContadorIds(): void{
    this.contIds = this.eventos.length;
  }

  atualizaEventosHome():void{
    this.eventosHome = [];
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
    this.artigo = new Artigo("", [], "", []);
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

  editarArtigo(artigo: Artigo){
    this.artigo = artigo;
    this.editandoArtigo = true;
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
    if(!this.editandoArtigo){
      this.eventoSelecionado.artigos.push(this.artigo);
      this.artigoEnviado = true;
    } 
    else{
      var pos: number;
      pos = this.eventoSelecionado.artigos.indexOf(this.artigo);
      this.eventoSelecionado.artigos[pos] = this.artigo;
      this.editandoArtigo = false;
      this.artigoEditado = true;
    }
  }

  selecionaAutor(autor: Autor){
    if(this.autorSelecionado == autor){
      this.autorSelecionado = null;
    }
    else{
      this.autorSelecionado = autor;
    }
  }

  addAutor(){ 
    this.artigo.autores.push(this.autorSelecionado);
    console.log("ok");
  }

  addPalavraChave(palavra: string){ 
    this.artigo.palavrasChave.push(palavra);
  }


  novoEvento() : void {
    this.preencherNovoEvento();
  }

  novoArtigo(){
    this.preencherNovoArtigo();
  }
}
