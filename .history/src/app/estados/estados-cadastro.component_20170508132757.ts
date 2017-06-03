import { Component, OnInit } from '@angular/core';
import { Estado } from './Estado';
import { EstadoService } from './estados.service';
import { EstadosListaComponent } from './estados-lista.component';

import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'estados-cadastro.component.html'
})

export class EstadosCadastroComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}