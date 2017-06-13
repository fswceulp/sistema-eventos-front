import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home.component';
import { AjudaComponent } from './ajuda.component';

import { EstadosListaComponent } from './estados/estados-lista.component';
import { EstadoCadastroComponent } from './estados/cadastro.component';

import { EventosListaComponent } from './eventos/eventos-lista.component';
import { EventoDetalhesComponent } from './eventos/evento-detalhes.component';

import { InscritoCadastroComponent } from './inscritos/inscrito-cadastrar.component';
import { InscritoEditarComponent } from './inscritos/inscrito-editar.component';

const rotas: Routes = [
    {
        path: 'admin', component: AdminComponent, children: [
            { path: 'estados/cadastro', component: EstadoCadastroComponent },
            { path: 'estados', component: EstadosListaComponent },
            { path: 'eventos/:id/inscrito/cadastrar', component: InscritoCadastroComponent},
            { path: 'eventos/:id/inscrito/:idInsc/editar', component: InscritoEditarComponent} ,
            { path: 'eventos/:id',component: EventoDetalhesComponent},
            { path: 'eventos', component: EventosListaComponent },
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