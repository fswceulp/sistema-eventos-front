import { Component, OnInit } from '@angular/core';
import { ProgramacoesService } from './programacoes.service';
import { Programacao } from './Programacao';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: 'programacoes-lista.component.html'
})
export class ProgramacoesListaComponent implements OnInit {
    programacoes: any;
    programacao: any;
    idProgramacao: number;
    idEvento: number;
    programacaoSelecionada: any;
    status: boolean;
    msgErro: string;
    constructor(private programacoesService: ProgramacoesService,private activatedRoute: ActivatedRoute,
                     private router: Router) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.idEvento = params['idEvento'];
            this.programacoesService.all(this.idEvento)
            .subscribe(programacoes => this.programacoes = programacoes);
        });

        
    }

    cadastrarProgramacao() {
        this.router.navigate(['admin/eventos/'+this.idEvento+'/programacoes/cadastro']);
    }

    editarProgramacao(programacao: any) {
        this.router.navigate(['admin/eventos/'+this.idEvento+'/programacoes/' + programacao.id + '/edicao']);
    }
    
    visualizarProgramacao(programacao: any) {
         this.router.navigate(['admin/eventos/'+this.idEvento+'/programacoes/' + programacao.id]);
    }

    excluirProgramacao(programacao: Programacao) {
        this.programacoesService.delete(programacao.id).subscribe(
            palestrante => this.status = true,
            erro => this.msgErro = erro);
        this.programacoes.splice(this.programacoes.indexOf(programacao), 1);
    }


}