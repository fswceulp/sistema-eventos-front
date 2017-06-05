import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'perfil.component.html',
    styleUrls: ['perfil.component.css']
})

export class PerfilComponent implements OnInit {
    usuario : any = {};
    constructor() { }

    ngOnInit() { 
        this.usuario.nome = "Jose da Silva";
        this.usuario.email = "jose@gmail.com";
        this.usuario.endereco = "Avenida Teotônio Segurado 1501 Sul Palmas - TO CEP 77.019-900 Caixa Postal nº 85";
        this.usuario.telefone = "63 999001122";
    }
}