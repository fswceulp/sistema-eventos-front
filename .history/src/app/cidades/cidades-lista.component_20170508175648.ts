import { Component, OnInit } from '@angular/core';
import { Cidade } from './Cidade';
import { CidadesService } from './cidades.service'

@Component({
    templateUrl: 'cidades-lista.component.html'
})

export class CidadesListaComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}