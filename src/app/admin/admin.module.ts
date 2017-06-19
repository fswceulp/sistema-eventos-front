import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AjudaComponent } from './ajuda.component';
import { ProgramacoesListaComponent } from './eventos/programacoes/programacoes-lista.component';
import { ProgramacoesService } from './eventos/programacoes/programacoes.service';
import { ProgramacaoCadastroComponent } from './eventos/programacoes/cadastro.component';
import { ProgramacaoEdicaoComponent } from './eventos/programacoes/edicao.component';
import { ProgramacaoVisualizarComponent } from './eventos/programacoes/visualizar.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        HomeComponent,
        AjudaComponent,
        ProgramacoesListaComponent,
        ProgramacaoCadastroComponent,
        ProgramacaoEdicaoComponent,
        ProgramacaoVisualizarComponent
    ],
    providers: [
        ProgramacoesService
    ],
})
export class AdminModule { }