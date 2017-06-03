import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PalestrantesService } from './palestrante.service';

@Component({
    templateUrl: 'palestrante-lista.component.html'
})

export class PalestranteListaComponent implements OnInit {
    palestrantes: any;

    constructor(private palestrantesService: PalestrantesService, private activatedRoute: ActivatedRoute ) { }

    ngOnInit() { 
        this.palestrantes = this.palestrantesService.all();
    }
}