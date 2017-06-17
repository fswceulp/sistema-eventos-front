import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Evento } from './Evento';
import { Artigo } from '../artigos/Artigo';
import { EventosService } from './eventos.service';
import 'rxjs/add/operator/switchMap';


@Component({
    templateUrl: 'evento-detalhes.component.html',
	styleUrls: ['evento-detalhes.component.css']
})

export class EventoDetalhesComponent implements OnInit {
    evento: Evento;
	artigos: any[];
	idEvento: number;
	
    constructor(
        private eventosService: EventosService,
        private route: ActivatedRoute,
		private router: Router) { }

    ngOnInit() {
        this.route.params
            .switchMap(params => {
                let id: number = Number.parseInt(params['id']);
				
                return this.eventosService.find(id);
            })
            .subscribe(evento => this.evento = evento );
		this.route.params.subscribe((params: Params) => {
            this.idEvento = params['id'];
		
        });
		this.eventosService.getArtigosByEvento(this.idEvento).
            subscribe(artigos => this.artigos = artigos);
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