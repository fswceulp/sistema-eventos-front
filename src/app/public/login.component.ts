import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    loading: boolean = false;
    model: any = {};
    usuario: any;
    pathLogo: string = '../src/assets/images/logo.png';

    constructor(private loginService: LoginService) { }

    ngOnInit() { }

    onSubmit(){
        console.log("em onSubmit()");
        this.loading = true;
        this.usuario = this.validaCredenciais(this.model.login, this.model.senha);
        console.log(this.usuario);
        
        this.loading = false;
    }
    validaCredenciais(login: string, senha: string){
        return this.loginService.validaCredenciais(login, senha)
            .subscribe(usuario => this.usuario);

    }
}