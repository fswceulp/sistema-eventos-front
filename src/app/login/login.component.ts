import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from './login.service';

@Component({
    selector: 'my-login',
    templateUrl: 'login.component.html',
    providers: [LoginService]
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    urlSucesso: string;
    showDialog = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService
    ){}

    ngOnInit() {
        // reseta os dados do usuário logado
        this.loginService.logout();
        // direciona o usuário logado.
        this.urlSucesso = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.loginService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    if(data.length <= 0){
                        this.showDialog = true;
                        this.loading = false;
                        return this.goLogin();
                    }
                    this.router.navigate([this.urlSucesso]);
                },
                error => {
                    console.log("Erro:", error);
                    this.loading = false;
                });
    }

    goLogin():void{
        this.router.navigate(['/login']);
    }

}
