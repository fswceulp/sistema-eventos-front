import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadesListaComponent } from './cidades-lista.component';
import { CidadesHomeComponent } from './cidades-home.component';

const rotas: Routes = [
    {
        path: 'cidades',
        component: CidadesHomeComponent,
        children: [
            // { path: ':nome', component: EstadosDetalhesComponent },
            { path: '', component: CidadesListaComponent },
        ]
    },

];


@NgModule({
    imports: [],
    exports: [],
  
})
export class NameModule { }
