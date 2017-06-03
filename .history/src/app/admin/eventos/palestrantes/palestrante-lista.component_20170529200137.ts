import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'palestrante-lista.component.html'
})

export class PalestranteListaComponent implements OnInit {
    palestrantes: any; 
    constructor(private palestranteService: palestranteService ) { }

    ngOnInit() { }
}