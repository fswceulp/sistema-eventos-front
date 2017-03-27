import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DesempenhoAluno } from './desempenho-aluno.component';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        DesempenhoAluno
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
