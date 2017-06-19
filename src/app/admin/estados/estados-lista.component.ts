import { Component, OnInit } from '@angular/core';
import { EstadosService } from './estados.service';

@Component({
    templateUrl: 'estados-lista.component.html'
})
export class EstadosListaComponent implements OnInit {
    estados: any;

    constructor(private estadosService: EstadosService) { }

    ngOnInit() { 
        this.estados = this.estadosService.all();
    }
}