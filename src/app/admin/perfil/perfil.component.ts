import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../usuario/Usuario';
import { CheckLogin } from '../../usuario/checkLogin/checkLogin.component';

@Component({
    templateUrl: 'perfil.component.html',
    styleUrls: ['perfil.component.css']
})

export class PerfilComponent implements OnInit {
    usuario : Usuario = new Usuario();
    constructor(private router: Router) { }

    ngOnInit() { 
        this.fillUser();
    }
    fillUser(){
        let usuario = JSON.parse(sessionStorage.getItem('usuario'));
        this.usuario = usuario;
        console.log(usuario);
        console.log(usuario.email);
    }
}