import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { EventoManagerService } from './evento-manager.service';
import { Evento } from './Evento';
import { Artigo } from './Artigo';
import { Autor } from './Autor';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html'
})
export class EventoManagerComponent implements OnInit {
	eventos: Evento[];
	eventoSelecionado: Evento = null;
	evento: Evento = new Evento(this.contIdEvento , "", "", '', '', '', '', '', '',null);
	deleteEvento: Evento = new Evento(0 , "", "", '', '', '', '', '', '',null);
	contIdEvento: number = 7;
	home: boolean = true;
	listaEventos: boolean = false;
	telaEvento: boolean = false;
	formulario: boolean = false;
	sucesso: boolean = false;
	editar: boolean = false;
	excluir: boolean = false;
	
	contIdArtigo: number = 3;
	artigo: Artigo = new Artigo(this.contIdArtigo, "",[],"",[]);
	artigoSelecionado: Artigo = new Artigo(this.contIdArtigo, "",[],"",[]);
	autor: Autor = new Autor("","");
	formularioArtigo: boolean = false;
	formularioEditarArtigo: boolean = false;
	excluirArtigo: boolean = false;
	cadastroPasso: number = 0;
	palavraChave: string;
	
	constructor(private eventoManagerService: EventoManagerService) {}
	
	ngOnInit(){
		this.eventoManagerService.getEventos()
		.subscribe(
			resEventos => {
				this.eventos = resEventos as Evento[];
			},
			error => console.error('Error: ' + error),
			() => console.log('Completed!')
		);
	}

	/*Trabalho 3*/
	
	cadastrarArtigo() : void{
		this.formularioArtigo = true;
		this.cadastroPasso = 1;
		this.preencherNovoArtigo();
		this.novoAutor();
	}

	preencherNovoArtigo() : void{
		this.artigo = new Artigo(this.contIdArtigo, "", [], "", []);
	}
	
	novoAutor() : void{
		this.autor = new Autor("","");
	}
	
	cadastrarAutor() : void{
		if(this.autor.nome == "" || this.autor.email == ""){
			this.cadastroPasso = 4; // mensagem de alerta (campo vazio)
		}
		else{
			if(this.cadastroPasso == 1){
				let a = new Autor(this.autor.nome,this.autor.email);
				this.artigo.autores.push(a);
			}
			this.novoAutor();
			console.log(this.artigo);
		}
	}
	
	cadastrarPalavra() : void{
		if(this.palavraChave == ""){
			this.cadastroPasso = 5; // mensagem de alerta (campo vazio)
		}
		else{
			this.artigo.pChave.push(this.palavraChave);
			this.palavraChave = "";
			console.log(this.artigo);
		}
	}
	
	proximoPasso() : void{
		if(this.cadastroPasso < 3){
			this.cadastroPasso ++;
		}
	}	
	
	onSubmitArtigo() : void{
		if(this.palavraChave == ""){
			this.cadastroPasso = 5; // mensagem de alerta (campo vazio)
		}
		else{
			this.cadastrarPalavra();
			this.evento.artigos.push(this.artigo);
			this.cadastroPasso = 6;
			this.contIdArtigo ++;
		}
	}
	
	editarArtigo(artigo : Artigo) : void{
		this.artigo = artigo;
		this.formularioEditarArtigo = true;
	}
	
	apagarArtigo() : void{
		if(this.excluirArtigo){
			this.evento.artigos.splice(this.evento.artigos.indexOf(this.artigoSelecionado), 1);
			this.excluirArtigo = false;
			this.artigoSelecionado = null;
		}
	}
	
	/*Fim-Trabalho 3*/
	
	visualizarEvento(evento: Evento) : void{
		this.evento = evento;
		this.limparTela();
		this.telaEvento = true;
	}

	editarEvento(evento: Evento) : void{
		this.evento = evento;
		this.limparTela();
		this.formulario = true;
		this.editar = true;
	}
	
	telaExcluirEvento(evento: Evento) : void{
		this.deleteEvento = evento;
		this.limparTela();
		this.excluir = true;
	}

	excluirEvento() : void{
		if(this.excluir){
			this.eventos.splice(this.eventos.indexOf(this.deleteEvento), 1);
			this.todosEventos();
		}
		else{
			this.limparTela();
			this.telaEvento = true;
		}
	}

	onSubmit() : void {
		console.log(this.evento);
		this.eventos.push(this.evento);
		this.contIdEvento ++;
		this.limparTela();
		this.sucesso = true;
	}

	novoEvento() : void {
		this.limparTela();
		this.formulario = true;
		this.preencherNovoEvento();
	}
	
	preencherNovoEvento(): void {
		this.evento = new Evento(this.contIdEvento, "", "", '', '', '', '', '', '',null);
	}
	
	todosEventos(): void{
		this.limparTela();
		this.listaEventos = true;
	}
	
	telaHome(): void{
		this.limparTela();
		this.home = true;
	}
	
	limparTela() : void{ /*Esconde todas as telas, depois de chamar esse método 
						  você escolhe "manualmente" qual tela deseja exibir*/
		this.home = false;
		this.listaEventos = false;
		this.telaEvento = false;
		this.formulario = false;
		this.sucesso = false;
		this.editar = false;
		this.excluir = false;
		this.artigoSelecionado = null;
		this.eventoSelecionado = null;
	}
}
