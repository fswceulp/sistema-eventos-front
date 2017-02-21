import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RodapeComponent} from "./rodape.component";
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        RodapeComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
