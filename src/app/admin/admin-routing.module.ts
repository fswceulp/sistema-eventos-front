import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home.component';
import { AjudaComponent } from './ajuda.component';
import { ProgramacoesListaComponent } from './eventos/programacoes/programacoes-lista.component';
import { ProgramacaoCadastroComponent } from './eventos/programacoes/cadastro.component';
import { ProgramacaoEdicaoComponent } from './eventos/programacoes/edicao.component';
import { ProgramacaoVisualizarComponent } from './eventos/programacoes/visualizar.component';

const rotas: Routes = [
    {
        path: 'admin', component: AdminComponent, children: [
            { path: 'eventos/:idEvento/programacoes/cadastro', component: ProgramacaoCadastroComponent },
            { path: 'eventos/:idEvento/programacoes/:idProgramacao/edicao', component: ProgramacaoEdicaoComponent },
            { path: 'eventos/:idEvento/programacoes/:idProgramacao', component: ProgramacaoVisualizarComponent },
            { path: 'eventos/:idEvento/programacoes', component: ProgramacoesListaComponent },
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