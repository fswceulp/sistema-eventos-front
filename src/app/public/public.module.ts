import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home.component';
import { SobreComponent } from './sobre.component';
import { LoginComponent } from './login.component';
import { PublicRoutingModule } from './public-routing.module';
import { LoginService } from './login.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        PublicRoutingModule
    ],
    declarations: [
        PublicComponent,
        HomeComponent,
        SobreComponent,
        LoginComponent
    ],
    providers: [
        LoginService
    ],
})
export class PublicModule { }