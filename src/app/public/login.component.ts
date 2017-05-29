import { Component, OnInit } from '@angular/core';
import { LoginService } from '../usuario/autenticacao.service';
import { Usuario } from '../usuario/Usuario';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    loading: boolean = false;
    model: any = {};
    pathLogo: string = '../src/assets/images/logo.png';
    url: string;


    constructor(private loginService: LoginService 
            ,private router: Router) { }

    ngOnInit() {
        this.url = '/eventos';
    }

    onSubmit(){
        this.loading = true;
        this.loginService.validaCredenciais(this.model.login, this.model.senha.trim())
            .subscribe(
                data => {
                    if(data.length > 0){
                        if(data[0].nome == "admin"){
                            this.router.navigate(['/admin']);    
                        }
                        else{
                            this.router.navigate([this.url]);
                        }
                        console.log(data[0]);
                    }
                    else{
                        alert("Credenciais não cadastradas no banco de dados");
                        this.model = {};
                        this.router.navigate(['/']);
                    }
                },
                error => {
                    alert(error.message());
                }
            );        
        this.loading = false;    
    }
}