import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from './Evento';
import { EventosService } from './eventos.service';
import 'rxjs/add/operator/switchMap';


@Component({
    templateUrl: 'evento-detalhes.component.html'
})

export class EventoDetalhesComponent implements OnInit {
    evento: Evento;

    constructor(
        private eventosService: EventosService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params
            .switchMap(params => {
                let id: number = Number.parseInt(params['id']);
                return this.eventosService.find(id);
            })
            .subscribe(evento => this.evento = evento );
    }
}