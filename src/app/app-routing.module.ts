import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { SobreComponent } from './sobre.component';

const rotas: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }