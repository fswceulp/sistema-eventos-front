import { Injectable } from '@angular/core';
import { Evento } from './Evento';

@Injectable()
export class EventosService {
    eventos : Evento[];

    constructor() {
        this.eventos = [
            new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO'),
            new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI'),
            new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC')
        ];
    }

    all() {
        return this.eventos;
    }

    save(evento: Evento) {
        this.eventos.push(evento);        
    }
}
