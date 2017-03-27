import { Injectable } from '@angular/core';
import { Aluno } from "./Aluno";

@Injectable()
export class AlunoServico {
    Alunos: Aluno[];
    constructor() { 
        this.Alunos = [new Aluno("João","055.842.123-27"),new Aluno("Pedro","055.842.123-27"),new Aluno("Renato","123.842.123-27")];
    }

    getAll(){
        return this.Alunos;
    }

    getByCpf(cpf:string){
        for(var i in this.Alunos){
            if(this.Alunos[i].cpf == cpf){
                return this.Alunos[i];
            }
        }
    }

    save(aluno: Aluno){
        this.Alunos.push(aluno);
    }

}