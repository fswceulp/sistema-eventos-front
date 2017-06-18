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
import { PerfilComponent } from './perfil/perfil.component';
import { CheckLogin } from '../usuario/checkLogin/checkLogin.component';

//Biblioteca que permite criar elementos editáveis
import {InlineEditorModule} from '@qontu/ngx-inline-editor';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AdminRoutingModule,
        InlineEditorModule
    ],
    declarations: [
        AdminComponent,
        HomeComponent,
        AjudaComponent,
        EstadosListaComponent,
        EstadoCadastroComponent,
        PerfilComponent, 
        CheckLogin
    ],
    providers: [
        EstadosService
    ],
})
export class AdminModule { }