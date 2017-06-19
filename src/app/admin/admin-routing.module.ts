import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home.component';
import { AjudaComponent } from './ajuda.component';
import { EstadosListaComponent } from './estados/estados-lista.component';
import { CidadesListaComponent } from './cidades/cidades-lista.component';
import { CidadesFormComponent } from './cidades/cidades-form.component';
import { EstadoCadastroComponent } from './estados/cadastro.component';
import { Cidade } from './cidades/Cidade';

const rotas: Routes = [
    {
        path: 'admin', component: AdminComponent, children: [
            { path: 'estados/cadastro', component: EstadoCadastroComponent },
            { path: 'cidades', component: CidadesListaComponent },
            { path: 'cidades/cadastro', component: CidadesFormComponent },
            { path: 'cidades/editar/:idCidade', component: CidadesFormComponent },
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