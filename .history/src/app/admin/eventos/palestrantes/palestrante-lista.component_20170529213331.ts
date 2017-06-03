import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PalestrantesService } from './palestrante.service';

@Component({
    templateUrl: 'palestrante-lista.component.html'
})

export class PalestranteListaComponent implements OnInit {
    palestrantes: any;
    idEvento: number;

    constructor(private palestrantesService: PalestrantesService, private activatedRoute: ActivatedRoute ) { }

    ngOnInit() { 
        // subscribe to router event
        this.activatedRoute.params.subscribe((params: Params) => {
            this.idEvento = params['id'];
            console.log(idEvento);
        });
        this.palestrantes = this.palestrantesService.all(idEvento);
    }
}