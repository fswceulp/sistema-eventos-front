import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../Usuario';

@Component({
    templateUrl: 'perfil.component.html',
    styleUrls: ['perfil.component.css']
})

export class PerfilComponent implements OnInit {
    usuario : Usuario = new Usuario();
    constructor(private router: Router) { }

    ngOnInit() { 
        this.checkLogin();
    }
    checkLogin(){
        this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
        if(!this.usuario){
            this.router.navigate(['/login']);
        }
    }
}