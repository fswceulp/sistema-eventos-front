import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { EventoManagerService } from './evento-manager.service';
import { EventoManagerComponent } from './evento-manager.component';

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
    providers: [ EventoManagerService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
