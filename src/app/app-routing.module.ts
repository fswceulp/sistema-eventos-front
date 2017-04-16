import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { EventosListaComponent } from './eventos-lista.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { EventoDetalhesComponent } from './evento-detalhes.component';

const rotas: Routes = [
    { path: 'eventos/:id', component: EventoDetalhesComponent },
    { path: 'eventos', component: EventosListaComponent },
    { path: '', component: HomeComponent },
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
