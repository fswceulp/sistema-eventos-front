import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../Usuario';

@Component({
    templateUrl: 'checkLogin.component.html',
    styleUrls: ['checkLogin.component.css'],
    selector: 'checkLogin'
})

export class CheckLogin {
    usuario: Usuario = new Usuario();
    logged: boolean;
    constructor(private router: Router) {
        this.checkLogin();
    }
    
    checkLogin() {
        this.usuario = JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
        if (!this.usuario) {
            this.router.navigate(['/login']);
            this.logged = false;
        }else{
            this.logged = true;
        }
    }
}
