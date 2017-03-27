import { Injectable } from '@angular/core';
import { Desempenho } from './Desempenho';
import { TurmaServico } from './turma.service';
import { Turma } from './Turma';
import { Aluno } from './Aluno';
import { AlunoServico } from './Aluno.service';

@Injectable()
export class DesempenhoServico {
    desempenhos: Desempenho[];
    constructor(private turmas: TurmaServico) {
        var t: Turma[];
        t = this.turmas.getAll();
        this.desempenhos = this.add(t);
    }

    add(t: Turma[]) {
        var arrDesempenhos: Desempenho[] = [];
        for(var turma of t){
            for (var aluno of turma.alunos){
                arrDesempenhos.push(new Desempenho(aluno,turma,Math.floor((Math.random() * 10) + 1)));
            }
        }
        return arrDesempenhos;
    }

    save(a: Aluno, t: Turma){
        this.desempenhos.push(new Desempenho(a,t,Math.floor((Math.random() * 10) + 1)));
    }

    getAll(){
        return this.desempenhos;
    }
    
}