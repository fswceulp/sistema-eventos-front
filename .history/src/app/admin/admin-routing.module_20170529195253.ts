import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home.component';
import { AjudaComponent } from './ajuda.component';
import { EstadosListaComponent } from './estados/estados-lista.component';
import { EstadoCadastroComponent } from './estados/cadastro.component';

const rotas: Routes = [
    {
        path: 'admin', component: AdminComponent, children: [
            { path: 'eventos/cadastro', component: EstadoCadastroComponent },
            { path: 'estados/cadastro', component: EstadoCadastroComponent },
            { path: 'estados', component: EstadosListaComponent },
            { path: 'ajuda', component: AjudaComponent },
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
export class AdminRoutingModule { }