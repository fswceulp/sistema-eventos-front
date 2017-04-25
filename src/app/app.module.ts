import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CidadesService } from './cidades.service';
import { EstadosService } from './estados.service';
import { HomeComponent } from './home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { AppRoutingModule } from './app-routing.module';
import { EventosModule } from './eventos/eventos.module';
import { TesteComponent } from './teste.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        EventosModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC68eCj8gIMftTKBV6tSMLnjyrx2Ej26ZE'
    })
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        TesteComponent,
        PaginaNaoEncontradaComponent
    ],
    providers: [
        CidadesService,
        EstadosService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

