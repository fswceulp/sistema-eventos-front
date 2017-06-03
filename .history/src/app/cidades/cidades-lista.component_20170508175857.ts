import { Component, OnInit } from '@angular/core';
import { Cidade } from './Cidade';
import { CidadesService } from './cidades.service';
import { Location } from '@angular/common';
import { Route } from '@angular/router';

@Component({
    templateUrl: 'cidades-lista.component.html'
})

export class CidadesListaComponent implements OnInit {
    cidades: Cidade[];

    constructor(private cidadesService: CidadesService,
    private router: Router) { }

    ngOnInit() { }
}