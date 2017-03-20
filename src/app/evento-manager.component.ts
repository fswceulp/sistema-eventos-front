import { Component, OnInit } from '@angular/core';
import { Evento } from './Evento';
import {Http} from '@angular/http';
import { EventoManagerService } from './evento-manager.service';

@Component({
  selector: 'evento-manager',
  templateUrl: './evento-manager.component.html',
  styleUrls: ['./evento-manager.component.css'],
  providers: [Http]
})
export class EventoManagerComponent implements OnInit{
  eventoSelecionado: Evento = null;
  enviado: boolean = false;
  editando: boolean = false;
  editado: boolean = false;
  deletado: boolean = false;
  eventos: Evento[] = []; // Todos os eventos existentes
  eventosHome: Evento[] = []; // Eventos que serão apresentados na tela inicial
  teste: any;
  contIds: number = this.eventos.length;
  evento: Evento = new Evento(this.contIds + 1, '', '');
  tela: string = "home";
  telaAnterior: string;

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



  // constructor() {
  //
  //
  //   // var eventos: Evento[] = [
  //   //   new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO'),
  //   //   new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI'),
  //   //   new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC'),
  //   //   new Evento(4, 'XXII Evento Para Testes', 'TESTE')
  //   // ];
  //   // this.eventos = eventos;
  //
  //   this.atualizaContadorIds();
  //   if(this.eventos.length >= 3){
  //     for(let i in this.eventos){
  //       if(parseInt(i) <= 2){
  //         this.eventosHome.push(this.eventos[i]);
  //       }else{
  //         break; //quebra o laço de repetição após preencher o array eventosHome
  //       }
  //     }
  //   }
  //
  //   if(this.eventos.length > 0 && this.eventosHome.length == 0){
  //     this.eventosHome = [];
  //     for(let i in this.eventos){
  //       this.eventosHome.push(this.eventos[i]);
  //     }
  //   }
  // }//fim construtor




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

  leituraArquivo():void{

  }

  preencheEventosFromLocalStorage(retorno: any[]): void{
    var array: string[];
    for(let o of retorno){
      //percorro todos os objetos do localStorage
      array = Object.keys(o);
      var objEvento: Evento = new Evento(0, "", "");
      for(let key of array){
        // percorro todas as chaves do objeto (todos os atributos)
        // console.log(o[key]);
        switch(key){
          case "id":{
            objEvento.id = o[key];
            break;
          }
          case "nome":{
            objEvento.nome = o[key];
            break;
          }
          case "sigla":{
            objEvento.sigla = o[key];
            break;
          }
          case "inicio":{
            objEvento.inicio = o[key];
            break;
          }
          case "termino":{
            objEvento.termino = o[key];
            break;
          }
          case "url":{
            objEvento.url = o[key];
            break;
          }
          case "cidade":{
            objEvento.cidade = o[key];
            break;
          }
          case "estado":{
            objEvento.estado = o[key];
            break;
          }
          case "local":{
            objEvento.local = o[key];
            break;
          }
        }//fim switch
      }
      this.eventos.push(objEvento);

      // this.eventos.push(objEvento);
    }
  }

  preencherNovoEvento(): void {
    this.evento = new Evento(0, "", "");
  }

  mostrarDetalhes(evento: Evento) : void {
    this.eventoSelecionado = evento;
  }

  deletar(evento: Evento): void{
    var posicao: number;
    posicao = this.eventos.indexOf(evento);
    this.eventos.splice(posicao, 1);
    this.deletado = true;
    if(this.eventos.length < 3){
      this.atualizaEventosHome();
    }
  }

  editar(evento: Evento): void{
    this.evento = evento;
    this.editando = true;
  }

  onSubmit() : void {
    console.log(this.evento);
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

  novoEvento() : void {
    this.preencherNovoEvento();
  }
}
