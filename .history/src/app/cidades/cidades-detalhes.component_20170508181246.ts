import { Component, OnInit } from '@angular/core';
import { Cidade } from './Cidade';
import { CidadesService } from './cidades.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    templateUrl: 'cidades-detalhes.component.html'
})

export class CidadesDetalhesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}