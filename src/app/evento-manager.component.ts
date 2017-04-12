import { Component } from '@angular/core';

import { Evento } from './Evento';
import { Artigo } from './Artigo';
import { Autor } from './Autor';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html'
})
export class EventoManagerComponent {
  eventos: Evento[];
  artigos: Artigo[];
  autores: Autor[] = [];
  eventoSelecionado: Evento = null;
  eventoEditar: Evento = null;
  eventoExcluir: Evento = null;
  evento: Evento = new Evento(0, '','','','','','','','');
  
  artigo: Artigo =  new Artigo(0,"",[""],"",[],0);
  autor: Autor = new Autor(0,"","");
  listaArtigos: Artigo[] = [];

  enviado: boolean = false;
  editado: boolean = false;
  pos:any;
  modo = "home";
/*(id, nome, sigla, inicio, termino, url, cidade, estado, local)*/
  constructor() {
    this.eventos = [
      new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO','15-05-2017','18-05-2017','http://ulbra-to.br/encoinfo/site/','Palmas','TO','CEULP/ULBRA'),
      new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI','05-06-2017','08-06-2017','http://sbsi2017.dcc.ufla.br/','Lavras','MG','UFLA'),
      new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC','02-06-2017','06-06-2017','http://csbc2017.mackenzie.br/','São Paulo','SP','Universidade Presbiteriana Mackenzie'),
      new Evento(4, 'XXXVIII Congresso da Sociedade Brasileira de Computação', 'CSBC - 2','02-06-2018','06-06-2018','http://csbc2017.mackenzie.br/','São Paulo','SP','Universidade Presbiteriana Mackenzie'),
      new Evento(5, 'XIV Simpósio Brasileiro de Sistemas de Informação', 'SBSI - 2','05-06-2018','08-06-2018','http://sbsi2017.dcc.ufla.br/','Lavras','MG','UFLA'),
    ];
    this.artigos = [
            new Artigo(1,"Redes de Computadores",["Redes","Computadores","Mediana"],"Bom artigo para aprender sobre redes de computadores",[new Autor(0,"Madianita","madianita@gmail.com")],1),
            new Artigo(2,"Logica de Predicados",["Logica","Predicados","Facil"],"Bom artigo para aprender sobre Logica de Predicados",[new Autor(0,"Parcilene","parcilene@gmail.com")],1),
            new Artigo(3,"Engenharia de Software",["Engenharia","Dificil","Software"],"Bom artigo para aprender sobre Engenharia de Software",[new Autor(0,"Cristina","cristina@gmail.com"),new Autor(0,"Fabiano","fabiano@hotmail.com")],2),
    ];
  }

//AUTOR
onSubmitAutor() : void {
    console.log(this.autor);
    if(this.autores.length > 0){
      this.autor.id = this.autores[this.autores.length-1].id + 1;
    }
    this.autores.push(this.autor);
    console.log("autores",this.autores);
    this.modo = "cadastrarArtigo";
    this.novoAutor();

}

novoAutor() : void {
    this.preencherNovoAutor();
}

preencherNovoAutor(): void {
    this.autor = new Autor(0,"","");
}


  //ARTIGO

  preencherNovoArtigo(): void {
    this.artigo = new Artigo(0,"",[""],"",[],0);
  }

  getArtigos(idEvento: number){
    for (let i = 0; i < this.artigos.length; i++) {
      if(this.artigos[i].idEvento == idEvento){
        this.listaArtigos.push(this.artigos[i]);
      }
    }
  }

  onSubmitArtigo() : void {
    this.artigo.autores=this.autores;
    this.artigo.idEvento = this.eventoSelecionado.id;
    console.log(this.artigo);
    if(this.artigos.length > 0){
      this.artigo.id = this.artigos[this.artigos.length-1].id + 1;
    }
    this.artigos.push(this.artigo);
    console.log("artigos",this.artigos);
    this.modo = "visualizar";
    this.novoArtigo();
  }

  novoArtigo() : void {
    this.preencherNovoArtigo();
  }



  //EVENTO

  preencherNovoEvento(): void {
    this.evento = new Evento(0,"","","","","","","","");
  }

  onSubmit() : void {
    console.log(this.evento);
    this.eventos.push(this.evento);
    this.enviado = true;
    this.modo = "eventos";
    this.eventoSelecionado= null;
    console.log("eventoss",this.eventos);
  }

  novoEvento() : void {
    this.preencherNovoEvento();
    this.enviado = false; 
    this.eventoEditar = null;
    this.editado = false;
    this.modo = "cadastrar";
  }

  mostrarDetalhes(evento: Evento) : void {
    this.eventoSelecionado = evento;
    this.modo = "visualizar";
    this.pos=this.eventos.indexOf(evento);
    this.listaArtigos = [];
    this.getArtigos(this.eventoSelecionado.id);
  }

  alterar(){
     console.log(this.evento);
     this.eventos[this.pos] = this.evento;
     this.eventoSelecionado = this.evento;
     this.editado = true;
     this.modo = "visualizar";
  }

  excluirEvento(evento: Evento){
    this.modo = "eventos";
    this.eventos.splice(this.pos,1)
  }

  listarEventos(){
    this.modo = "eventos";
    this.eventoSelecionado= null;
  }

  cadastrar(){
    this.preencherNovoEvento();
    this.modo = "cadastrar";
    this.eventoSelecionado = null;
  }

  editar(evento: Evento){
    this.modo = "editar";
    this.eventoEditar = new Evento(evento.id, evento.nome, evento.sigla, evento.inicio, evento.termino, evento.url, evento.cidade, evento.estado, evento.local);
    this.evento = this.eventoEditar;
  }




}
