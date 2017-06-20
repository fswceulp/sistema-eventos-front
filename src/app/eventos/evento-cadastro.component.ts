import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from './Evento';
import { EventosService } from './eventos.service';
import 'rxjs/add/operator/switchMap';


@Component({
    templateUrl: 'evento-cadastro.component.html'
})

export class EventosCadastroComponent implements OnInit {

    constructor(
	private eventosService: EventosService,
	private route: ActivatedRoute,
	private router: Router
	) { }

    ngOnInit() {
        
    }
	telaEventos() {
        this.router.navigate(['/eventos']);
    }
}