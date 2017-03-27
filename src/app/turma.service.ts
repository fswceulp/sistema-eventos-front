import { Injectable } from '@angular/core';
import {Turma} from './Turma';
import {AlunoServico} from './Aluno.service';
import {Aluno} from './Aluno';
@Injectable()
export class TurmaServico {
    Turmas: Turma[];
    constructor(private alunoServico: AlunoServico) { 
        this.Turmas = [new Turma( "Algoritmos 1",alunoServico.getAll()),new Turma( "Algoritmos 2",alunoServico.getAll())];
    }

    getAll(){
        return this.Turmas;
    }

    getTurmaByName(name: string){
        for(let turma of this.Turmas){
            if(turma.nome == name){
                return turma;
            }
        }
    }

    getAllAlunost(t: Turma){
        return t.alunos;
    }
}