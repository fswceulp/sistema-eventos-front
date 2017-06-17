import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosHomeComponent } from './eventos-home.component';
import { EventosListaComponent } from './eventos-lista.component';
import { EventoDetalhesComponent } from './evento-detalhes.component';
//import { EventoProgramacaoComponent } from './evento-programacao.component';

const rotas: Routes = [
    {
        path: 'eventos',
        component: EventosHomeComponent,
        children: [
		/*Infelizmente não consegui combinar um padrão de rota com o colega responsável pela
		tela Programação de evento, então deixei esta como preenchimento
            { path: 'programacao/:id', component: EventoProgramacaoComponent },*/
			{ path: ':id', component: EventoDetalhesComponent },
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
