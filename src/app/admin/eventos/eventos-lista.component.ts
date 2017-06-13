import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { EventosService } from '../../eventos/eventos.service';
import { Evento } from '../../eventos/Evento';

@Component({
    templateUrl: 'eventos-lista.component.html'
})

export class EventosListaComponent implements OnInit {
    eventos: Evento[];

    constructor(private eventosService: EventosService,
        private router: Router) { }

    ngOnInit() {
        this.eventosService.all().
            subscribe(eventos => this.eventos = eventos);
    }

    mostrarDetalhes(evento: Evento) {
        this.router.navigate(['/admin/eventos', evento.id]);
    }
}