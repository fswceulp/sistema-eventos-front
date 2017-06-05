import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home.component';
import { SobreComponent } from './sobre.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PublicRoutingModule } from './public-routing.module';
import { LoginService } from '../usuario/autenticacao.service';
import { UsuarioService } from '../usuario/usuario.service';
import { PerfilComponent } from '../usuario/perfil/perfil.component';

//Biblioteca que permite criar elementos editáveis
import {InlineEditorModule} from '@qontu/ngx-inline-editor';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        PublicRoutingModule,
        InlineEditorModule
    ],
    declarations: [
        PublicComponent,
        HomeComponent,
        SobreComponent,
        CadastroComponent,
        LoginComponent,
        PerfilComponent
    ],
    providers: [
        LoginService,
        UsuarioService
    ],
})
export class PublicModule { }