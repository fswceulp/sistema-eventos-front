import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

//extensão da class Obsevable
import 'rxjs/add/observable/of';
//operadores Observable
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Evento } from './evento';
import { EventoService } from './evento.service';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'my-eventos',
    templateUrl: './eventos.component.html',
    styleUrls: ['./eventos.component.css'],
    providers: [EventoService]
})

export class EventosComponent implements OnInit{
    title = 'Eventos Cadastrados';
    eventos: Evento[];
    deletado:boolean = false;
    error:boolean = false;
    evento = new Evento();
    eventoSelecionado = new Evento();

    showDialog = false;

    constructor(
        private eventoService: EventoService,
        private router: Router
    ){}
    
    ngOnInit(): void{
        this.getEventos();
    }

    getEventos(): void{
        this.eventoService.getEventos()
            .subscribe(
                eventos => this.eventos = eventos,
            );
    }

    deletar(evento: Evento):void{
        this.eventoService.delete(evento)
        .subscribe(
            eventos => {
                this.evento = eventos;
                this.deletado = true;
                this.error = false;
                this.atualizar();
            },
            error => {
                this.deletado = false;
                this.error = true;
            }
        );
    }
    
    atualizar() {
        this.getEventos();
    }
}
