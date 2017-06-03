import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadesListaComponent } from './cidades-lista.component';
import { CidadesHomeComponent } from './cidades-home.component';

const rotas: Routes = [
    {
        path: 'estados',
        component: EstadosHomeComponent,
        children: [
            { path: ':uf', component: EstadosDetalhesComponent },
            { path: '', component: EstadosListaComponent },
        ]
    },

];


@NgModule({
    imports: [],
    exports: [],
    declarations: [NameComponent],
    providers: [],
})
export class NameModule { }
