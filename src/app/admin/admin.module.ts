import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AjudaComponent } from './ajuda.component';
import { EstadosListaComponent } from './estados/estados-lista.component';
import { EstadosService } from './estados/estados.service';
import { CidadesListaComponent } from './cidades/cidades-lista.component';
import { CidadesFormComponent } from './cidades/cidades-form.component';
import { CidadesService } from './cidades/cidades.service';
import { Cidade } from './cidades/Cidade';
import { EstadoCadastroComponent } from './estados/cadastro.component';

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
        EstadosListaComponent,
        EstadoCadastroComponent,
        CidadesListaComponent,
        CidadesFormComponent
    ],
    providers: [
        EstadosService,
        CidadesService
    ],
})
export class AdminModule { }