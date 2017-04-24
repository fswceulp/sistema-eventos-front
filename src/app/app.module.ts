import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CidadesService } from './cidades.service';
import { EstadosService } from './estados.service';
import { HomeComponent } from './home.component';
import { SobreComponent } from './sobre.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { AppRoutingModule } from './app-routing.module';
import { EventosModule } from './eventos/eventos.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        EventosModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SobreComponent,
        PaginaNaoEncontradaComponent
    ],
    providers: [
        CidadesService,
        EstadosService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

