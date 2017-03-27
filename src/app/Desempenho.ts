import {Aluno} from './Aluno';
import {Turma} from './Turma';

export class Desempenho {
    aluno: Aluno;
    turma: Turma;
    nota: number;

    constructor(aluno: Aluno, turma: Turma, nota: number) {
        this.aluno = aluno;
        this.turma = turma;
        this.nota = nota;
    }
}