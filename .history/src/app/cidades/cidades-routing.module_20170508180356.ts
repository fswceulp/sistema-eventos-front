import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadesListaComponent } from './cidades-lista.component';
import { CidadesHomeComponent } from './cidades-home.component';

@Component({
    moduleId: module.id,
    selector: 'selector-name',
    templateUrl: 'name.component.html'
})

export class NameComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}