import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
    selector: 'my-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.css'],
    providers: [UsuarioService]
})

export class UsuariosComponent implements OnInit {
    private id = JSON.parse(localStorage.getItem('currentUser'))[0].id; //Id do usuário Logado
    usuario: Usuario[];

    constructor(
        private usuarioService: UsuarioService,
        private router: Router
    ){}

    ngOnInit(): void{
        this.usuarioService.getUsuario(this.id)
            .subscribe(
                usuario => this.usuario = usuario,
            );
    }
}