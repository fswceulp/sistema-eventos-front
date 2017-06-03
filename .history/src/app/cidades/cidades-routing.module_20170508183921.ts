import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadesListaComponent } from './cidades-lista.component';
import { CidadesHomeComponent } from './cidades-home.component';
import { CidadesDetalhesComponent } from './cidades-detalhes.component';

const rotas: Routes = [
    {
        path: 'cidades',
        component: CidadesHomeComponent,
        children: [
            { path: ':nome', component: CidadesDetalhesComponent },
            { path: '', component: CidadesListaComponent },
        ]
    },

];


@NgModule({
    imports: [
        RouterModule.forChild(rotas)
    ],
    exports: [
        RouterModule
    ],
})
export class CidadesRoutingModule { }
