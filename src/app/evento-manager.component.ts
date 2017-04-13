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
  autores: Autor[];
  
  eventoSelecionado: Evento = null;
  artigoSelecionado: Artigo = null;
  autorSelecionado: Autor = null;
  
  id: number = 6;
  
  evento: Evento = new Evento(this.id+1, '', '', '','','','','','');
  artigo: Artigo = new Artigo('','','',0);
  autor: Autor = new Autor('','','');
  
  enviado: boolean = false;
  
  editar: boolean = false;
  editarArt: boolean = false;
  editarAutor:boolean = false;
  
  salvaArt:boolean =false;
  salvaEve:boolean =false;
  salvaAutor:boolean = false;
  
  
  
  pos: number;
  posArt:number;
  posAutor:number;
  
  ultimaTela:String=null;
  
  home:boolean=false;
  lista:boolean=true;
  descricao:boolean=true;
  cadastro:boolean=true;
  msg:boolean=true;
  
  cadastroArtigo: boolean = true;
  msgArtigo:boolean = true;
  descricaoArtigo:boolean = true;

  
  cadastroAutor:boolean = true;
  msgAutor:boolean = true;
  descricaoAutor:boolean=true;
  

  constructor() {
    this.eventos = [
      new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO','15-05-2017','18-05-2017','http://ulbra-to.br/encoinfo/site/','Palmas','TO','CEULP/ULBRA'),
      new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI','05-06-2017','08-06-2017','http://sbsi2017.dcc.ufla.br/','Lavras','MG','UFLA'),
      new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC','02-06-2017','06-06-2017','http://csbc2017.mackenzie.br/','São Paulo','SP','Universidade Presbiteriana Mackenzie'),
	  new Evento(4, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO','15-05-2017','18-05-2017','http://ulbra-to.br/encoinfo/site/','Palmas','TO','CEULP/ULBRA'),
      new Evento(5, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI','05-06-2017','08-06-2017','http://sbsi2017.dcc.ufla.br/','Lavras','MG','UFLA'),
      new Evento(6, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC','02-06-2017','06-06-2017','http://csbc2017.mackenzie.br/','São Paulo','SP','Universidade Presbiteriana Mackenzie')
    ];
	
	this.artigos = [
	  new Artigo('Programação WEB','lpweb','programação programação programação',1),
	  new Artigo('Redes Neurais','neurais','redes neuraris rede neurais',1),
	  new Artigo('Internet das coisas','internet','internet conectada em tudo no nosso dia dia',2),
	  new Artigo('Análise forense','análise','analisar conteudos',3)
	];
	
	this.autores = [
	  new Autor('Jackson','jackson@gmail.com','Programação WEB'),
	  new Autor('Parcilene','parcilene@gmail.com','Programação WEB'),
	  new Autor('Marcus','marcus.vl325@gmail.com','Internet das coisas'),
	  new Autor('Pedro','pedro@gmail.com','Análise forense'),
	];
  }
  
  getArtigos(id : number) {
        let lista : any[] = [];
        for(var artigo of this.artigos) {
            if (artigo.codEvento == id) {
                lista.push(artigo);
            }
        }
        return lista;
  }
  
  getAutores(titulo : String) {
        let lista : any[] = [];
        for(var autor of this.autores) {
            if (autor.nomeArt == titulo) {
                lista.push(autor);
            }
        }
        return lista;
 }
 
  preencherNovoArtigo(): void {
    this.artigo = new Artigo('','','',this.eventoSelecionado.id);
  }
  novoArtigo() :void{
	this.preencherNovoArtigo();
  }

  preencherNovoAutor(): void {
    this.autor = new Autor('','',this.artigoSelecionado.titulo);
  }
  novoAutor() :void{
	this.preencherNovoAutor();
  }

  
  preencherNovoEvento(): void {
    this.evento = new Evento(this.id + 1, '', '', '','','','','','');
  }

  mostrarDetalhes(evento: Evento) : void {
    this.eventoSelecionado = evento;
	
  }
  
  tela(): void{
	if(this.ultimaTela=='home'){
	this.home=false;
	}
	if (this.ultimaTela=='lista'){
	this.lista=false;
	}

  }

  onSubmit() : void {
    console.log(this.evento);
    if(this.editar){
      this.eventos.splice(this.pos,1, this.evento);
      this.pos = null;
	  this.cadastro=true;
	  this.eventoSelecionado=this.evento;
	  this.descricao=false;
	  this.editar=false;
    }
	if(this.editarArt){
	this.artigos.splice(this.posArt,1, this.artigo);
	this.cadastroArtigo=true;
	this.descricao=false;
	this.artigoSelecionado=this.artigo;
	this.editarArt=false;
	}
	if(this.editarAutor){
	this.autores.splice(this.posAutor,1, this.autor);
	this.autorSelecionado=this.autor;
	this.cadastroAutor=true;
	this.descricaoAutor=false;
	this.editarAutor=false;
	}
	if(this.salvaEve){
	this.eventos.push(this.evento);
    this.id = this.evento.id;
	this.cadastro=true;
	this.lista=false;
	this.descricao=true;
	this.cadastro=true;
	this.descricao=true;
	this.salvaEve=false;
	}
	if(this.salvaArt){
	this.artigos.push(this.artigo);
	this.cadastroArtigo=true;
	this.descricao=false;
	this.salvaArt=false;
	} 
	if(this.salvaAutor){
	this.autores.push(this.autor);
	this.cadastroAutor=true;
	this.descricaoArtigo=false;
	this.salvaAutor=false;
	}
    this.enviado = true;
  }

  novoEvento() : void {
    this.preencherNovoEvento();
  }


  editarEvento(evento: Evento){
    this.pos = this.eventos.indexOf(evento);
    
    this.evento.id = evento.id;
    this.evento.nome = evento.nome;
    this.evento.sigla = evento.sigla;
    this.evento.inicio = evento.inicio;
    this.evento.termino = evento.termino;
    this.evento.url = evento.url;
    this.evento.cidade = evento.cidade;
    this.evento.estado = evento.estado;
    this.evento.local = evento.local;
    
    this.editar = true;
  }
  
  editarArtigo(artigo: Artigo){
    this.posArt = this.artigos.indexOf(artigo);
    
    this.artigo.titulo = artigo.titulo;
    this.artigo.palavraChave = artigo.palavraChave;
    this.artigo.resumo = artigo.resumo;
    this.artigo.codEvento=this.artigoSelecionado.codEvento;
	
    this.editarArt = true;
  }
  excluirArtigo(artigo: Artigo): void{
    let pos = this.artigos.indexOf(artigo);
    this.artigos.splice(pos,1);
    this.artigoSelecionado = null;
	this.excluirRelAutores(artigo.titulo);
  }
  excluirRelArt(id:number):void{
        for(var artigo of this.artigos) {
            if (artigo.codEvento == id) {
			let pos = this.artigos.indexOf(artigo);
			this.artigos.splice(pos,1);
            }
        }
  }
  editarAut(autor: Autor){
    this.posAutor = this.autores.indexOf(autor);
    
    this.autor.nome = autor.nome;
    this.autor.email = autor.email;
    this.autor.nomeArt=this.autorSelecionado.nomeArt;
	
    this.editarAutor = true;
  }
  excluirAut(autor: Autor): void{
 
    let pos = this.autores.indexOf(autor);
    this.autores.splice(pos,1);
    this.autorSelecionado = null;
  }
  excluirRelAutores(titulo: String):void{
        for(var autor of this.autores) {
            if (autor.nomeArt == titulo) {
			let pos = this.autores.indexOf(autor);
			this.autores.splice(pos,1);
            }
        }
  }
  excluirEvento(evento: Evento): void{
	this.excluirRelArt(evento.id);
    let pos = this.eventos.indexOf(evento);
    this.eventos.splice(pos,1);
    this.eventoSelecionado = null;
	this.tela();
  }
  ver(){
	if(this.eventoSelecionado!=null && this.descricao==false){
	return true;
	}
  }
}
