import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CidadesHomeComponent } from './cidades-home.component';
import { CidadesListaComponent } from './cidades-lista.component';
// import { CidadesDetalhesComponent } from './cidades-detalhes.component';
import { CidadesRoutingModule } from './cidades-routing.module';
import { CidadesService } from './cidades.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CidadesRoutingModule
    ],
    declarations: [
        CidadesHomeComponent,
        CidadesDetalhesComponent,
        CidadesListaComponent,
    ],
    providers: [
        CidadesService
    ]
})
export class CidadesModule { }