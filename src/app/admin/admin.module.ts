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
import { EstadoEditarComponent } from './estados/editar.component';

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
		EstadoEditarComponent
		
    ],
    providers: [
        EstadosService
    ],
})
export class AdminModule { }