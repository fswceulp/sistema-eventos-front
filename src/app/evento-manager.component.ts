import { Component } from '@angular/core';
import { Evento } from './Evento';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html'
})
export class EventoManagerComponent {
	eventos: Evento[];
	eventoSelecionado: Evento = null;
	evento: Evento = new Evento(0, "", "", '', '', '', '', '', '');
	deleteEvento: Evento = new Evento(0, "", "", '', '', '', '', '', '');
	home: boolean = true;
	listaEventos: boolean = false;
	telaEvento: boolean = false;
	formulario: boolean = false;
	sucesso: boolean = false;
	editar: boolean = false;
	excluir: boolean = false;
	
	constructor() {
		this.eventos = [
			{ "id":1, "nome": "XIX Congresso de Computação e Sistemas de Informação", "sigla": "ENCOINFO", "inicio": "2017-03-04", "termino": "2017-03-06", "url": "http://ulbra-to.br/encoinfo/site/", "cidade": "Palmas", "estado": "TO", "local": "CEULP"},
			{ "id":2, "nome": "XIII Simpósio Brasileiro de Sistemas de Informação", "sigla": "SBSI", "inicio": "2017-04-20", "termino": "2017-04-25", "url": "http://sbsi2016.ufsc.br/", "cidade": "Florianópolis", "estado": "SC", "local": "Castelmar"},
			{ "id":3, "nome": "XXXVII Congresso da Sociedade Brasileira de Computação", "sigla": "CSBC", "inicio": "2017-05-15", "termino": "2017-05-20", "url": "http://csbc2017.mackenzie.br/", "cidade": "São Paulo", "estado": "SP", "local": "Mackenzie"},
			{ "id":4, "nome": "II Congresso de IA de Palmas", "sigla": "CIAP", "inicio": "2016-12-31", "termino": "2017-01-20", "url": "http://www.ciap.com.br", "cidade": "Palmas", "estado": "TO", "local": "Ceulp/Ulbra"},
			{ "id":5, "nome": "I Congresso de Ciência da Computação de Palmas", "sigla": "CCCP", "inicio": "2017-03-31", "termino": "2017-04-05", "url": "http://www.cccp.com.br", "cidade": "Palmas", "estado": "TO", "local": "Ceulp/Ulbra"},
			{ "id":6, "nome": "III Congresso de Empresas de Tecnologia do Tocantins", "sigla": "CET-TO", "inicio": "2017-05-28", "termino": "2017-06-03", "url": "http://www.cet-to.com.br", "cidade": "Palmas", "estado": "TO", "local": "Ceulp/Ulbra"},
			{ "id":7, "nome": "XIII Encontro Anual de Computação", "sigla": "ENACOMP", "inicio": "2017-05-24", "termino": "2017-05-26", "url": "http://www.enacomp.com.br/#/", "cidade": "Goiânia", "estado": "GO", "local": "UFG"}
		];
	}
	
	visualizarEvento(evento: Evento) : void{
		this.evento = evento;
		this.tudoFalso();
		this.telaEvento = true;
	}

	editarEvento(evento: Evento) : void{
		this.evento = evento;
		this.tudoFalso();
		this.formulario = true;
		this.editar = true;
	}
	
	telaExcluirEvento(evento: Evento) : void{
		this.deleteEvento = evento;
		this.tudoFalso();
		this.excluir = true;
	}

	excluirEvento() : void{
		if(this.excluir){
			this.eventos.splice(this.eventos.indexOf(this.deleteEvento), 1);
			this.todosEventos();
		}
		else{
			this.tudoFalso();
			this.telaEvento = true;
		}
	}

	onSubmit() : void {
	console.log(this.evento);
	if(this.editar){
		this.eventos.splice(this.eventos.indexOf(this.evento),1,this.evento);
		this.editar = false;
	}
	else{
		this.eventos.push(this.evento);
	}
	this.tudoFalso();
	this.sucesso = true;
	}

	novoEvento() : void {
		this.tudoFalso();
		this.formulario = true;
		this.preencherNovoEvento();
	}
	
	preencherNovoEvento(): void {
		this.evento = new Evento(0, "", "", '', '', '', '', '', '');
	}
	
	todosEventos(): void{
		this.tudoFalso();
		this.listaEventos = true;
	}
	
	telaHome(): void{
		this.tudoFalso();
		this.home = true;
	}
	
	tudoFalso() : void{ /*Esconde todas as telas, depois de chamar esse método 
						  você escolhe "manualmente" qual tela deseja exibir*/
		this.home = false;
		this.listaEventos = false;
		this.telaEvento = false;
		this.formulario = false;
		this.sucesso = false;
		this.editar = false;
		this.excluir = false;	
	}
}
