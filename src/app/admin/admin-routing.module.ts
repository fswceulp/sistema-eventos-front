import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home.component';
import { AjudaComponent } from './ajuda.component';
import { EstadosListaComponent } from './estados/estados-lista.component';
import { EstadoCadastroComponent } from './estados/cadastro.component';
import { PalestranteListaComponent } from './eventos/palestrantes/palestrante-lista.component';
import { PalestranteCadastroComponent } from './eventos/palestrantes/cadastro.component';

const rotas: Routes = [
    {
        path: 'admin', component: AdminComponent, children: [
            { path: 'eventos/:id/palestrantes/:idPalestrante/editar', component: PalestranteCadastroComponent },
            { path: 'eventos/:id/palestrantes/cadastro', component: PalestranteCadastroComponent },
            { path: 'eventos/:id/palestrantes', component: PalestranteListaComponent },
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