import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosHomeComponent } from './eventos-home.component';
import { EventosListaComponent } from './eventos-lista.component';
import { EventoDetalhesComponent } from './evento-detalhes.component';
import { EventoCadastroComponent } from './evento-cadastro.component';

const rotas: Routes = [
    {
        path: 'eventos',
        component: EventosHomeComponent,
        children: [
            { path: ':id', component: EventoDetalhesComponent },
			{ path: 'cadastro', component: EventoCadastroComponent },
            { path: '', component: EventosListaComponent },	
        ]
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(rotas)
    ],
    exports: [
        RouterModule
    ]
})
export class EventosRoutingModule { }
