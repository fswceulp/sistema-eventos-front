import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { TesteComponent } from './teste.component';

const rotas: Routes = [
    { path: '', component: HomeComponent },
    { path: 'teste', component: TesteComponent },
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
