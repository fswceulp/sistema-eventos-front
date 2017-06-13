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
import { EstadoCadastroComponent } from './estados/cadastro.component';

import { EventosListaComponent } from './eventos/eventos-lista.component';
import { EventoDetalhesComponent} from './eventos/evento-detalhes.component';

import { InscritosService } from './inscritos/inscritos.service';
import { InscritoCadastroComponent } from './inscritos/inscrito-cadastrar.component';
import { InscritoEditarComponent } from './inscritos/inscrito-editar.component';

import { UsuariosService } from './inscritos/usuario.service';

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
        EventosListaComponent,
        EventoDetalhesComponent,
        InscritoCadastroComponent,
        InscritoEditarComponent
    ],
    providers: [
        UsuariosService,
        EstadosService,
        InscritosService
    ],
})
export class AdminModule { }