import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { EstadosHomeComponent } from './cidades-home.component';
import { EstadosListaComponent } from './cidades-lista.component';
import { EstadosDetalhesComponent } from './cidades-detalhes.component';
import { EstadosRoutingModule } from './estados-routing.module';
import { EstadoService } from './estados.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        EstadosRoutingModule
    ],
    declarations: [
        EstadosHomeComponent,
        EstadosDetalhesComponent,
        EstadosListaComponent,
    ],
    providers: [
        EstadoService
    ]
})
export class EstadosModule { }