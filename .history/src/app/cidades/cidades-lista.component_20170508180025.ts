import { Component, OnInit } from '@angular/core';
import { Cidade } from './Cidade';
import { CidadesService } from './cidades.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'cidades-lista.component.html'
})

export class CidadesListaComponent implements OnInit {
    cidades: Cidade[];

    constructor(private cidadesService: CidadesService,
    private router: Router) { }

    ngOnInit() { 
        this.cidadesService.all().subscribe(cidades => this. = cidades);
    }

    mostrarDetalhes(cidade: Cidade){
        this.router.navigate(['/cidades', cidade.nome])
    }
}