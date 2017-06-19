import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home.component';
import { SobreComponent } from './sobre.component';

const rotas: Routes = [
    {
        path: '', component: PublicComponent, children: [
            { path: 'sobre', component: SobreComponent },
            { path: '', component: HomeComponent }
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
export class PublicRoutingModule { }