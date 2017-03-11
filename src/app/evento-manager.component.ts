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
    }

    mostrarDetalhes(evento:Evento):void {
        if (this.eventoSelecionado != null) {
            this.eventoSelecionado = null;
        }
        else {
            this.eventoSelecionado = evento;
        }
    }

    editarEvento(evento:Evento):void {
        this.editado = true;
        this.eventoEditado = evento;
        this.evento = evento;
    }

    excluirEvento(evento:Evento):void {
        this.eventos.splice(this.eventos.indexOf(evento),1);
    }

    onSubmit():void {
        console.log(this.evento);
        if(this.editado){
            this.eventos.splice(this.eventos.indexOf(this.eventoEditado),1,this.eventoEditado);
            this.editado = false;
        }
        else{
            this.eventos.push(this.evento);
        }
        this.enviado = true;
    }

    novoEvento():void {
        this.preencherNovoEvento();
    }
}
