import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EventosComponent } from './admin/eventos/eventos.component';
import { EventosGestaoComponent } from './admin/eventos/eventos.gestao.component';

const routes: Routes = [
    { path: '', redirectTo:'admin/eventos', pathMatch: 'full' },
    {path: 'admin/eventos', component: EventosComponent},
    {path: 'admin/eventos/add', component: EventosGestaoComponent},
    {path: 'admin/eventos/edit/:id', component: EventosGestaoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}