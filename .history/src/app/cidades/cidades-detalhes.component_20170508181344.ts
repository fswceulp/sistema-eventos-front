import { Component, OnInit } from '@angular/core';
import { Cidade } from './Cidade';
import { CidadesService } from './cidades.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: 'cidades-detalhes.component.html'
})

export class CidadesDetalhesComponent implements OnInit {
    cidade: Cidade;
    constructor(
        private route: ActivatedRoute) { }

    ngOnInit() { }
}