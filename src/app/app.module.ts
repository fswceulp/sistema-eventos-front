import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EventoManagerComponent } from './evento-manager.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        EventoManagerComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
