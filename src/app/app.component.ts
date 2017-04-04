import { Component } from '@angular/core';

import '../../public/css/style.css';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public static usuario: string = "";

    usar(usuario: string) {
        AppComponent.usuario = usuario;
    }

    sair() {
        AppComponent.usuario = "";
    }

    ehAdmin() {
        return AppComponent.usuario == "Administrador";
    }

    estahLogado() {
        return AppComponent.usuario != "";
    }
}
