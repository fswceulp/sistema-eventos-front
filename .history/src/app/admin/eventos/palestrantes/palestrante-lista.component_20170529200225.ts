import { Component, OnInit } from '@angular/core';
import { PalestrantesService } from './palestrante.service';

@Component({
    templateUrl: 'palestrante-lista.component.html'
})

export class PalestranteListaComponent implements OnInit {
    palestrantes: any; 
    constructor(private palestrantesService: PalestrantesService ) { }

    ngOnInit() { }
}