import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin.component';
import { AvaliadorComponent } from './avaliador.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        AdminComponent,
        AvaliadorComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
