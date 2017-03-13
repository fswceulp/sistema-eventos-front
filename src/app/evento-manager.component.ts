import { Component } from '@angular/core';
import { Evento } from './Evento';
import {empty} from "rxjs/Observer";

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html'
})
export class EventoManagerComponent {
    eventos:Evento[];
    eventoSelecionado:Evento = null;
    eventoEditado:Evento = null;
    editado:boolean = false;
    evento:Evento = new Evento(0, "", "", '', '', '', '', '', '');
    enviado:boolean = false;

    constructor() {
        this.eventos = [
            new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO', '31/12/2016', '20/01/2017', 'http://www.ecoinfo.com.br', 'Palmas', 'TO', 'Ceulp/Ulbra'),
            new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI', '31/12/2016', '20/01/2017', 'http://www.sbsi.com.br', 'Palmas', 'TO', 'Ceulp/Ulbra'),
            new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC', '31/12/2016', '20/01/2017', 'http://www.csbc.com.br', 'Palmas', 'TO', 'Ceulp/Ulbra')
        ];
    }

    preencherNovoEvento():void {
        this.evento = new Evento(0, "", "", '', '', '', '', '', '');
        this.eventoSelecionado = null;
    }

    mostrarDetalhes(evento:Evento):void {
        if (this.eventoSelecionado != null && this.eventoSelecionado==evento) {
            this.eventoSelecionado = null;
        }
        else {
            this.eventoSelecionado = evento;
        }
    }

    editarEvento(evento:Evento):void {
        this.editado = true;
        this.eventoEditado = evento;
        this.evento.id = evento.id;
        this.evento.nome = evento.nome;
        this.evento.sigla = evento.sigla;
        this.evento.inicio = evento.inicio;
        this.evento.termino = evento.termino;
        this.evento.url = evento.url;
        this.evento.cidade = evento.cidade;
        this.evento.estado = evento.estado;
        this.evento.local = evento.local;
    }

    excluirEvento(evento:Evento):void {
        this.eventos.splice(this.eventos.indexOf(evento),1);
    }

    onSubmit():void {
        console.log(this.evento);
        if(this.editado){
            this.eventos.splice(this.eventos.indexOf(this.eventoEditado),1,this.evento);
            this.editado = false;
        }
        else{
            this.eventos.push(this.evento);
        }
        this.enviado = true;
        this.eventoSelecionado = null;
    }

    novoEvento():void {
        this.preencherNovoEvento();
    }
}
