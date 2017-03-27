import {Aluno} from './Aluno';
export class Turma{
    public id: number;
    public nome: string;
    public alunos: Aluno[];

    constructor(nome: string, alunos: Aluno[]){
        this.nome = nome;
        this.alunos = alunos;
    }
}