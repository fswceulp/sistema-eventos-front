import { Component, OnInit } from '@angular/core';
import { EstadoService } from './estados.service';
import { Estado } from './Estado';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'estados-lista.component.html'
})

export class EstadosListaComponent implements OnInit {
    estados: Estado[];

    constructor(private estadosService: EstadoService,
    private router: Router) { }

    ngOnInit() {
        this.estadosService.all().subscribe(estados => this.estados = estados);
    }

    mostrarDetalhes(estado: Estado){
        this.router.navigate(['/estados', estado.uf])
    }
// tslint:disable-next-line:eofline
}