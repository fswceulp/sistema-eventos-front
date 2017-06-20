import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { EventosService } from './eventos.service';
import { Evento } from './Evento';

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
        this.router.navigate(['/eventos', evento.id]);
    }
	telaHome() {
        this.router.navigate(['/']);
    }
	telaCadastro() {
        this.router.navigate(['/eventos/cadastro']);
    }
}