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
  listaArtigos: Artigo[] = [];
  artigoSelecionado: Artigo = null;
  palavrasChaves: string = "";
  artigoEditar: Artigo = null;

  autor: Autor = new Autor(0,"","");
  autorEditar: Autor = null;

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
    if(this.artigoSelecionado != null){
      this.modo = "editarArtigo";
    }
    this.novoAutor();
}

novoAutor() : void {
    this.preencherNovoAutor();
    
}

preencherNovoAutor(): void {
    this.autor = new Autor(0,"","");
}

excluirAutor(autor: Autor){
    this.autores.splice(this.autores.indexOf(autor),1)
}

alterarAutor(){
     console.log("autorAlterar",this.autor);
     this.artigoSelecionado.autores[this.pos] = this.autor;
     this.modo = "cadastrarArtigo";
      if(this.artigoSelecionado != null){
        this.mostrarArtigo(this.artigoSelecionado);
      }
  }

  editarAutor(autor: Autor){
    this.pos = this.artigoSelecionado.autores.indexOf(autor);
    this.modo = "editarAutor";
    this.autorEditar = new Autor(autor.id, autor.nome, autor.email);
    this.autor = this.autorEditar;
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
    this.artigo.palavrasChave = this.palavrasChaves.split("-");
    this.artigo.idEvento = this.eventoSelecionado.id;
    console.log(this.artigo);
    if(this.artigos.length > 0){
      this.artigo.id = this.artigos[this.artigos.length-1].id + 1;
    }
    this.palavrasChaves = "";
    this.artigos.push(this.artigo);
    console.log("artigos",this.artigos);
    this.modo = "visualizar";
    this.novoArtigo();
    this.listaArtigos = [];
    this.getArtigos(this.eventoSelecionado.id);
    this.autores = [];
  }

  novoArtigo() : void {
    this.preencherNovoArtigo();
    console.log("artigo",this.artigo);
  }

  mostrarArtigo(artigo: Artigo) : void {
    console.log("detalhes",artigo);
    console.log("detalhes",this.artigo);
    this.artigoSelecionado = artigo;
    this.autores = [];
    this.autores = this.artigoSelecionado.autores;
    this.palavrasChaves = "";
    for (var i = 0; i < this.artigoSelecionado.palavrasChave.length; i++) {
      if (i == 0) {
        this.palavrasChaves = this.palavrasChaves + this.artigoSelecionado.palavrasChave[0];
      } else {
        this.palavrasChaves = this.palavrasChaves + "-" + this.artigoSelecionado.palavrasChave[i]; 
      }
    }
    this.modo = "visualizarArtigo";
    this.pos=this.artigos.indexOf(artigo);
  }

  excluirArtigo(artigo: Artigo){
    this.artigos.splice(this.pos,1)
    this.mostrarDetalhes(this.eventoSelecionado);
  }

  artigoAlterar(){
     console.log("artigoAlterar",this.artigo);
     this.autores = this.artigo.autores;
     this.artigo.palavrasChave = this.palavrasChaves.split("-");
     this.artigo.autores = this.autores;
     this.palavrasChaves = "";
     this.artigos[this.pos] = this.artigo;
     this.artigoSelecionado = this.artigo;
     this.mostrarArtigo(this.artigoSelecionado);
  }

  editarArtigo(artigo: Artigo){
    this.modo = "editarArtigo";
    this.artigoEditar = new Artigo(artigo.id, artigo.titulo, artigo.palavrasChave, artigo.resumo, artigo.autores, artigo.idEvento);
    this.autores = artigo.autores;
    this.artigo = this.artigoEditar;
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
    console.log("detalhes",this.artigo);
    this.artigo = new Artigo(0,"",[""],"",[],0);;
    this.autores = [];
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