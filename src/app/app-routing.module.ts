import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EventosComponent } from './admin/eventos/eventos.component';
import { EventosGestaoComponent } from './admin/eventos/eventos.gestao.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { AuthGuard } from './restrito/auth.guard';

const routes: Routes = [
    { path: '', redirectTo:'admin/eventos', pathMatch: 'full' },
    { path: 'admin/eventos', component: EventosComponent, canActivate:[AuthGuard] },
    { path: 'admin/eventos/add', component: EventosGestaoComponent, canActivate:[AuthGuard] },
    { path: 'admin/eventos/edit/:id', component: EventosGestaoComponent, canActivate:[AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}