import { Component } from '@angular/core';
import { EventosService } from './eventos.service';
import { EstadosService } from './estados.service';
import { CidadesService } from './cidades.service';
import { Evento } from './Evento';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html',
    providers: [ EventosService, EstadosService, CidadesService ]
})
export class EventoManagerComponent {
  eventos: Evento[];
  eventoSelecionado: Evento = null;
  evento: Evento = new Evento(0, '', '');
  enviado: boolean = false;
  estados: any[];
  cidades: any[];

  constructor(private eventosService : EventosService, 
    private estadosService : EstadosService,
    private cidadesService : CidadesService ) {

    this.eventos = this.eventosService.all();
    this.estados = this.estadosService.all();
    this.cidades = this.cidadesService.all();

  }

  getCidades(uf: string) {
    return this.cidadesService.allByUf(uf);
  }

  preencherNovoEvento(): void {
    this.evento = new Evento(0, "", "");
  }

  mostrarDetalhes(evento: Evento) : void {
    this.eventoSelecionado = evento;
  }

  onSubmit(form: any) : void {
    this.eventosService.save(this.evento);
    this.enviado = true;
    form.reset();
  }

  novoEvento() : void {
    this.preencherNovoEvento();
  }
}
