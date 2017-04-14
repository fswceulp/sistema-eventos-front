import { Component, OnInit } from '@angular/core';
import { Evento } from './Evento';
import { Artigo } from './Artigo';
import { Autor } from './Autor';
import { EventoManagerService } from './evento-manager.service';

@Component({
  selector: 'evento-manager',
  templateUrl: './evento-manager.component.html',
  providers: [EventoManagerService]
})
export class EventoManagerComponent implements OnInit {
  eventos: Evento[];
  eventoSelecionado: Evento = null;
  eventoEditar: Evento = null;
  idEvento: number = 4;
  evento: Evento = new Evento(0, '', '');
  enviado: boolean = false;
  editar: boolean = false;
  editado: boolean = false;
  tresPrimeiros: Evento[] = [];

  //VARIÁVEIS PARA O ARTIGO
  autor: Autor = new Autor("","");
  artigoSelecionado: Artigo = null;
  artigoEditar: Artigo = null;
  formularioCadastroArtigo: boolean = false;
  formularioEditarArtigo: boolean = false;
  artigo: Artigo = new Artigo("","",[],[]);
  palavrasChave: string = "";
  artigoEditado: boolean = false;
  artigoEnviado: boolean = false;
  editarA: boolean = false;

  // VARIÁVEIS PARA CONTROLE DE TELAS
  home: boolean = true;
  listaEventos: boolean = false;
  detalhesEvento: boolean = false;
  detalhesArtigo: boolean = false;
  formularioCadastro: boolean = false;
  formularioEditar: boolean = false;
  confirmarExclusao: boolean = false;
  confirmarExclusaoArtigo: boolean = false;

  constructor(private eventoManagerService: EventoManagerService) {
  }

  ngOnInit(): void {
    this.eventoManagerService.getEventos().subscribe(eventos => {
      this.eventos = eventos;
      this.pegarTresPrimeiros();
    });
  }

  pegarTresPrimeiros(): void {
    // console.log(this.xhttp.eventosJson);
    this.tresPrimeiros = [];
    if (this.eventos.length > 3) {
      for (var i = 0; i < 3; i++) {
        this.tresPrimeiros[i] = this.eventos[i];
      }
    }
    else {
      for (var i = 0; i < this.eventos.length; i++) {
        this.tresPrimeiros[i] = this.eventos[i];
      }
    }
  }

  preencherNovoEvento(): void {
    this.evento = new Evento(this.idEvento + 1, "", "", "", "", "", "", "", "");
  }
  preencherNovoArtigo(): void{
    this.artigo = new Artigo("","",[],[]);
  }

  mostrarDetalhesEvento(evento: Evento): void {
    this.eventoSelecionado = evento;
    this.selecionarTela("detalhes");
  }

  mostrarDetalhesArtigo(artigo: Artigo): void {
    this.artigoSelecionado = artigo;
    this.selecionarTela("detalhes-artigo");
  }

  onSubmitArtigo(): void{
    if (this.editarA) {
      var posicao = this.eventoSelecionado.artigos.indexOf(this.artigoEditar);
      this.eventoSelecionado.artigos[posicao] = this.artigo;
      this.artigoEditado = true;
      this.selecionarTela("detalhes");
    }
    else {
      this.eventoSelecionado.artigos.push(this.artigo);
      this.artigoEnviado = true;
      this.selecionarTela("detalhes");
    }
  }

  onSubmit(): void {
    console.log(this.evento);
    if (this.editar) {
      var posicao = this.eventos.indexOf(this.eventoEditar);
      this.eventos[posicao] = this.evento;
      this.editado = true;
      this.selecionarTela("lista-eventos");
    }
    else {
      this.eventos.push(this.evento);
      this.enviado = true;
      this.selecionarTela("lista-eventos");
    }

  }

  cadastrarAutor():void{
    let newAutor = new Autor(this.autor.nome,this.autor.email);
    this.artigo.autores.push(newAutor);
    this.novoAutor();
    
  }

  cadastrarPalavras():void{
    this.artigo.palavrasChave.push(this.palavrasChave);
    this.palavrasChave = "";
  }

  esconderMensagem(): void {
    this.editado = false;
  }

  novoEvento(): void {
    this.preencherNovoEvento();
    this.selecionarTela("cadastro");
  }

  novoArtigo(): void{
    this.preencherNovoArtigo();
    this.selecionarTela("cadastrar-artigo");
  }

  novoAutor() : void{
		this.autor = new Autor("","");
	}

  editarEvento(evento: Evento) {
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

  editarArtigo(artigo: Artigo){
    this.artigoEditar = artigo;

    this.artigo.titulo = artigo.titulo;
    this.artigo.resumo = artigo.resumo;
    this.artigo.autores = artigo.autores;
    this.artigo.palavrasChave = artigo.palavrasChave;
    this.editarA = true;
    this.selecionarTela("editar-artigo");
  }

  excluirEvento(evento: Evento): void {
    var posicao = this.eventos.indexOf(evento);
    this.eventos.splice(posicao, 1);
  }

  excluirArtigo(artigo: Artigo): void {
    var posicao = this.eventoSelecionado.artigos.indexOf(artigo);
    this.eventoSelecionado.artigos.splice(posicao, 1);
  }

  desvincularAutor(autor: Autor): void{
    var posicao = this.artigoSelecionado.autores.indexOf(autor);
    this.artigoSelecionado.autores.splice(posicao, 1);
  }
  desvincularPalavraChave(palavra: string): void{
    var posicao = this.artigoSelecionado.palavrasChave.indexOf(palavra);
    this.artigoSelecionado.palavrasChave.splice(posicao, 1);
  }

  selecionarTela(tela: string): void {
    if (tela == 'lista-eventos') {
      this.resetTelas();
      this.listaEventos = true;
    }
    else if (tela == 'home') {
      this.pegarTresPrimeiros();
      this.resetTelas();
      this.home = true;
    }
    else if (tela == "detalhes") {
      this.resetTelas();
      this.detalhesEvento = true;
    }
    else if (tela == "cadastro") {
      this.resetTelas();
      this.formularioCadastro = true;
    }
    else if (tela == "cadastrar-artigo") {
      this.resetTelas();
      this.formularioCadastroArtigo = true;
    }
    else if (tela == "editar") {
      this.resetTelas();
      this.formularioEditar = true;
    }
    else if (tela == "editar-artigo") {
      this.resetTelas();
      this.formularioEditarArtigo = true;
    }
    else if (tela == "confirmarExclusao") {
      this.resetTelas();
      this.confirmarExclusao = true;
    }
    else if (tela == "confirmarExclusaoArtigo") {
      this.resetTelas();
      this.confirmarExclusaoArtigo = true;
    }
    else if(tela == "detalhes-artigo"){
      this.resetTelas();
      this.detalhesArtigo = true;
    }
    else {
      this.resetTelas();
    }
  }

  resetTelas(): void {
    this.home = false;
    this.listaEventos = false;
    this.detalhesEvento = false;
    this.detalhesArtigo = false;
    this.formularioCadastroArtigo = false
    this.formularioCadastro = false;
    this.formularioEditarArtigo = false;
    this.formularioEditar = false;
    this.confirmarExclusao = false;
    this.confirmarExclusaoArtigo = false;
  }
}
