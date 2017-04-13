import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EventoManagerComponent } from './evento-manager.component';
import { RodapeComponent } from './rodape.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        EventoManagerComponent,
		RodapeComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
