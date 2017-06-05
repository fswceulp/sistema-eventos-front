import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home.component';
import { SobreComponent } from './sobre.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilComponent } from './usuario/perfil.component';

const rotas: Routes = [
    {
        path: '', component: PublicComponent, children: [
            {path: 'login', component: LoginComponent},
            {path: 'perfil', component: PerfilComponent},
            {path: 'cadastro', component: CadastroComponent},
            { path: 'sobre', component: SobreComponent },
            { path: '', component: HomeComponent }
        ]
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(rotas)
    ],
    exports: [
        RouterModule
    ]
})
export class PublicRoutingModule { }