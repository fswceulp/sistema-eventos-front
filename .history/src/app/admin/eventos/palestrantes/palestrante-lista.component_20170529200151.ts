import { Component, OnInit } from '@angular/core';
import { PalestranteService} from '@angular/core';

@Component({
    templateUrl: 'palestrante-lista.component.html'
})

export class PalestranteListaComponent implements OnInit {
    palestrantes: any; 
    constructor(private palestranteService: PalestranteService ) { }

    ngOnInit() { }
}