import { Component, OnInit } from '@angular/core';
import { ProgramacoesService } from './programacoes.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Programacao } from './Programacao';


@Component({
    templateUrl: 'edicao.component.html'
})
export class ProgramacaoEdicaoComponent implements OnInit {

    programacao: Programacao = new Programacao(null,null, "", "", "", "", "", null, null);
    idProgramacao: number;
    artigos: any;
    palestras: any;
    idEvento: number;
    status: boolean;
    msgErro: string;
    constructor(private programacoesService: ProgramacoesService, private activatedRoute: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.idProgramacao = params['idProgramacao'];
            this.idEvento = params['idEvento'];
            this.programacoesService.getProgramacaoById(this.idProgramacao)
                .subscribe(programacao => this.programacao = programacao);
            this.programacoesService.getArtigosByEvento(this.idEvento).subscribe(artigos => this.artigos = artigos);
            this.programacoesService.getPalestrasByEvento(this.idEvento).subscribe(palestras => this.palestras = palestras);
        });
    }

    save() {
        this.programacoesService.update(this.programacao).subscribe(
            programacao => this.status = true,
            erro => this.msgErro = erro);
    }

}