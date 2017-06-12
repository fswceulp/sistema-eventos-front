import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosGestaoComponent } from './admin/eventos/eventos.gestao.component';
import { EventosComponent } from './admin/eventos/eventos.component';
import { DialogComponent } from './dialog.component';

@NgModule({
    imports: [
        BrowserModule, 
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        NgbModule.forRoot()
    ],
    declarations:[
        AppComponent,
        EventosComponent,
        EventosGestaoComponent,
        DialogComponent
    ],
    providers: [],
    bootstrap:[AppComponent],
})
export class AppModule {}