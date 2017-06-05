import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../usuario/autenticacao.service';
import { Router } from '@angular/router';
import { Usuario } from '../../usuario/Usuario';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    loading: boolean = false;
    model: any = {};
    pathLogo: string = '../src/assets/images/logo.png';

    msgErro: string;


    constructor(private loginService: LoginService
        , private router: Router) { }

    ngOnInit() {

    }

    onSubmit() {
        this.loading = true;
        this.loginService.validaCredenciais(this.model.login, this.model.senha.trim())
            .subscribe(
            data => {
                if (data.length > 0) {
                    if (data[0].nome == "admin") {
                        this.router.navigate(['/admin']);
                    }
                    else {
                        this.router.navigate(['/eventos']);
                    }
                    let usuario = JSON.stringify(data[0]);
                    console.log(usuario);
                    sessionStorage.setItem('usuario', usuario);
                }
                else {
                    this.msgErro = "Credenciais não cadastradas no banco de dados";
                    this.model = {};
                    this.router.navigate(['/login']);
                }
            },
            error => {
                this.msgErro = error.statusText;
                console.log(error.statusText); //mensagem de erro
                console.log(error.status); //status do erro

            }
            );
        this.loading = false;
    }
}