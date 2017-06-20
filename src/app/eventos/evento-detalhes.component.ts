import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from './Evento';
import { Artigo } from './Artigo';
import { EventosService } from './eventos.service';
import 'rxjs/add/operator/switchMap';


@Component({
    templateUrl: 'evento-detalhes.component.html'
})

export class EventoDetalhesComponent implements OnInit {
    evento: Evento;
	eventoSelecionado:Evento;
	artigos:Artigo[];

    constructor(
	private eventosService: EventosService,
	private route: ActivatedRoute,
	private router: Router
	) {
	this.artigos = [
	  new Artigo('Programação WEB',1),
	  new Artigo('Redes Neurais',1),
	  new Artigo('Internet das coisas',2),
	  new Artigo('Análise forense',3)
	];
	}

    ngOnInit() {
        this.route.params
            .switchMap(params => {
                let id: number = Number.parseInt(params['id']);
                return this.eventosService.find(id);
            })
            .subscribe(evento => this.evento = evento );
			
			
			this.eventosService.allArtigos().
				subscribe(artigos => this.artigos = artigos);
				
			this.eventoSelecionado=this.evento;
    }
	telaEventos() {
        this.router.navigate(['/eventos']);
    }
	getArtigos(id : number) {
        let lista : any[] = [];
        for(var artigo of this.artigos) {
            if (artigo.idEvento == id) {
                lista.push(artigo);
            }
        }
        return lista;
	}
	detalhesTalhes(artigo:Artigo){
		this.router.navigate(['/eventos/'+artigo.idEvento+'/artigos',artigo.id]);
	}
}