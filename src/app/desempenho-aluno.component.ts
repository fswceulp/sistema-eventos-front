import { Component, OnInit } from '@angular/core';
import { AlunoServico } from './Aluno.service';
import { Aluno } from './Aluno';
import { Turma } from './Turma';
import { Desempenho } from './Desempenho';
import { TurmaServico } from './turma.service';
import { DesempenhoServico } from './desempenho.service';

@Component({
    selector: 'desempenho',
    templateUrl: 'desempenho-aluno.component.html'
})

export class DesempenhoAluno implements OnInit {
    aluno: Aluno = new Aluno('','');
    nomeTurma: string = "";
    alunos: Aluno[];
    turmas: Turma[];
    desempenhos: Desempenho[];
    cadastrar: boolean = false;

    constructor(private alunoServico: AlunoServico, private turmaService: TurmaServico, private desempenhoServico: DesempenhoServico) {
        this.alunos = alunoServico.getAll();
        this.turmas = turmaService.getAll();
        this.desempenhos = desempenhoServico.getAll();
    }

    ngOnInit() {

    }

    verificaNome(){
        console.log(this.nomeTurma);
    }

    onSubmit(form: any) : void {
        this.alunoServico.save(this.aluno);
        this.desempenhoServico.save(this.alunoServico.getByCpf(this.aluno.cpf),this.turmaService.getTurmaByName(this.nomeTurma));
        this.novoAluno();
        this.cadastrar = false;
        form.reset();
    }

    novoAluno() : void {
        this.aluno = new Aluno('','');
    }
}