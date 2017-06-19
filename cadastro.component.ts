import { Component, OnInit } from '@angular/core';
import { ProgramacoesService } from './programacoes.service';


@Component({
    templateUrl: 'cadastro.component.html'
})
export class ProgramacaoCadastroComponent implements OnInit {
    constructor(private programacoesService: ProgramacoesService) { }

    ngOnInit() { }

    salvar() {
        this.programacoesService.save("Pará", "PA")
            .subscribe(
                estado => console.log(estado),
                erro => console.log(erro));
    }
}