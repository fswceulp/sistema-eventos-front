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
        // subscribe to router event
        this.activatedRoute.params.subscribe((params: Params) => {
            let idEvento = params['userId'];
            console.log(userId);
        });
        this.palestrantes = this.palestrantesService.all();
    }
}