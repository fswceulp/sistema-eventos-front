import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EventoManagerComponent } from './evento-manager.component';

import { EventoManagerService } from './evento-manager.service';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        EventoManagerComponent
    ],
    providers: [EventoManagerService],
    bootstrap: [ AppComponent ]

})
export class AppModule { }
