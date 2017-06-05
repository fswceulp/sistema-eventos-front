import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../../usuario/usuario.service';

@Component({
    templateUrl: 'cadastro.component.html',
    styleUrls: ['cadastro.component.css']
})

export class CadastroComponent implements OnInit {
    model: any = {};
    msgErro: string;
    msgSucesso: string;

    constructor(private usuarioService: UsuarioService, private router: Router) { }

    ngOnInit() { }

    onSubmit() {

        this.usuarioService.save(this.model.login, this.model.senha)
            .subscribe(
            data => {
                this.msgSucesso = "Login cadastrado no sistema!";
            },
            error => {
                this.msgErro = error.statusText;
                console.log(error.statusText); //mensagem de erro
                console.log(error.status); //status do erro                
            });
    }
}