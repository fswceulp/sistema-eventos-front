import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { EventosService } from './eventos.service';
import { EstadosService } from './estados.service';
import { CidadesService } from './cidades.service';
import { Evento } from './Evento';


@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html',
    providers: [EventosService, EstadosService, CidadesService]
})
export class EventoManagerComponent implements OnInit {
    eventos: Evento[];
    eventoSelecionado: Evento = null;
    evento: Evento = new Evento(0, '', '');
    enviado: boolean = false;
    estados: any[];
    cidades: any[];

    constructor(private eventosService: EventosService,
        private estadosService: EstadosService,
        private cidadesService: CidadesService) {

    }

    ngOnInit(): void {
        this.eventosService.all().subscribe(eventos => this.eventos = eventos);
        this.estadosService.all().subscribe(estados => this.estados = estados);
        this.cidadesService.all().subscribe(cidades => this.cidades = cidades);
    }

    getCidades(uf: string) {
        if (!this.cidades) return [];
        let lista: any[] = [];
        for (let i = 0; i < this.cidades.length; i++) {
            if (this.cidades[i].uf == uf) {
                lista.push(this.cidades[i]);
            }
        }
        return lista;
    }

    preencherNovoEvento(): void {
        this.evento = new Evento(0, "", "");
    }

    mostrarDetalhes(evento: Evento): void {
        this.eventoSelecionado = evento;
    }

    onSubmit(form: any): void {
        let e = new Evento(this.evento.id, this.evento.nome, this.evento.sigla);
        e.estado = this.evento.estado;
        e.cidade = this.evento.cidade;
        this.eventos.push(e);
        this.enviado = true;
        form.reset();
    }

    novoEvento(): void {
        this.preencherNovoEvento();
    }
}
