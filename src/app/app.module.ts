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

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'eventos/:id', component: EventoDetalhesComponent },
            { path: 'eventos', component: EventosListaComponent },
            { path: '', component: HomeComponent },
            { path: '**', component: PaginaNaoEncontradaComponent }
        ])
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

