import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CidadesService } from './cidades.service';
import { EstadosService } from './estados.service';
import { AppRoutingModule } from './app-routing.module';
import { PublicModule } from './public/public.module';
import { AdminModule } from './admin/admin.module';
import { EventosModule } from './eventos/eventos.module';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        EventosModule,
        AdminModule,
        PublicModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PaginaNaoEncontradaComponent
    ],
    providers: [
        CidadesService,
        EstadosService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }