import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PalestrantesService } from './palestrante.service';
import { Palestrante } from './Palestrante';
import { Palestra } from '../palestras/Palestra';

@Component({
    templateUrl: 'cadastro.component.html'
})

export class PalestranteCadastroComponent implements OnInit {
    palestra: Palestra = new Palestra('','');
    palestrante: Palestrante = new Palestrante('', '', '', '', '', '', new Palestra('',''), 0);
    idEvento: any;

    constructor(private palestrantesService: PalestrantesService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
         // subscribe to router event
        this.activatedRoute.params.subscribe((params: Params) => {
            this.idEvento = params['id'];
        });
    }
}