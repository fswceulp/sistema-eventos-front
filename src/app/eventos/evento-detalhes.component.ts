import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EventosService } from './eventos.service';
import { Evento } from './Evento';
import { Artigo } from '../artigos/Artigo';
import 'rxjs/add/operator/switchMap';


@Component({
    templateUrl: 'evento-detalhes.component.html',
	styleUrls: ['evento-detalhes.component.css']
})

export class EventoDetalhesComponent implements OnInit {
    evento: any;
	artigos: Artigo[];
	eventoId: number;
	idCidade: number = null;
	cidade: any;
	
    constructor(
        private eventosService: EventosService,
        private route: ActivatedRoute,
		private router: Router) { }

    ngOnInit() {
		this.route.params.subscribe((params: Params) => {
            this.eventoId = params['id'];
			this.eventosService.getEventoById(this.eventoId)
			.subscribe(evento => this.evento = evento);
        });
		
		this.eventosService.getArtigosByEvento(this.eventoId)
		.subscribe(artigos => this.artigos = artigos);
    }
	
	detalhesProgramacao(evento: Evento) {
	/* Infelizmente não consegui combinar um padrão de rota com o colega responsável 
	pela tela Programação de evento, então deixei esta como preenchimento
        this.router.navigate(['/eventos/programacao', evento.id]); */
		alert("Infelizmente a Programação de evento não está disponível!");
    }
	
	detalhesArtigo(artigo: Artigo) {
	/* Infelizmente não consegui combinar um padrão de rota com o colega responsável 
	pela tela Artigos de evento, então deixei esta como preenchimento
        this.router.navigate(['/artigos/', artigo.id]); */
		alert("Infelizmente a seção de Artigos não está disponível!");
    }
	
}