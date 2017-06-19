import { Component, OnInit } from '@angular/core';
import { ProgramacoesService } from './programacoes.service';
import { Programacao } from './Programacao';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    templateUrl: 'cadastro.component.html'
})
export class ProgramacaoCadastroComponent implements OnInit {
    programacao: Programacao = new Programacao(null, null, "", "", "", "", "", null, null);
    idProgramacao: number = null;
    idEvento: number;
    status: boolean;
    msgErro: string;
    artigos: any;
    palestras: any;
    constructor(private programacoesService: ProgramacoesService, private activatedRoute: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.idEvento = params['idEvento'];
            this.programacoesService.getArtigosByEvento(this.idEvento).subscribe(artigos => this.artigos = artigos);
            this.programacoesService.getPalestrasByEvento(this.idEvento).subscribe(palestras => this.palestras = palestras);
            this.programacao.idEvento = this.idEvento;
        });
    }

    save() {
        console.log(this.programacao);
        this.programacoesService.save(this.programacao).subscribe(
            programacao => this.status = true,
            erro => this.msgErro = erro);
    }


}