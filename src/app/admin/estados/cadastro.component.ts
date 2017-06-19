import { Component, OnInit } from '@angular/core';
import { EstadosService } from './estados.service';


@Component({
    templateUrl: 'cadastro.component.html'
})
export class EstadoCadastroComponent implements OnInit {
    constructor(private estadosService: EstadosService) { }

    ngOnInit() { }

    salvar() {
        this.estadosService.save("Pará", "PA")
            .subscribe(
                estado => console.log(estado),
                erro => console.log(erro));
    }
}