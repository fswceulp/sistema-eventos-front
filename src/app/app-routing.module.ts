import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
<<<<<<< HEAD
import { TesteComponent } from './teste.component';

const rotas: Routes = [
    { path: '', component: HomeComponent },
    { path: 'teste', component: TesteComponent },
=======
import { SobreComponent } from './sobre.component';

const rotas: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
>>>>>>> 335122d304aa2a74ba84a4a3f921145cc5375bcc
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
