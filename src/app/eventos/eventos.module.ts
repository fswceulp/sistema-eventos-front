import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { EventosHomeComponent } from './eventos-home.component';
import { EventosListaComponent } from './eventos-lista.component';
import { EventoDetalhesComponent } from './evento-detalhes.component';
import { EventosRoutingModule } from './eventos-routing.module';
import { EventosService } from './eventos.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        EventosRoutingModule
    ],
    declarations: [
        EventosHomeComponent,
        EventoDetalhesComponent,
        EventosListaComponent,
    ],
    providers: [
        EventosService
    ]
})
export class EventosModule { }
