import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CidadesService } from './cidades.service';
import { EstadosService } from './estados.service';
import { EventosService } from './eventos.service';
import { HomeComponent } from './home.component';
import { EventosListaComponent } from './eventos-lista.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { EventoDetalhesComponent } from './evento-detalhes.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        EventoDetalhesComponent,
        EventosListaComponent,
        PaginaNaoEncontradaComponent
    ],
    providers: [
        CidadesService,
        EstadosService,
        EventosService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

