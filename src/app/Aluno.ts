export class Aluno{
    public id: number;
    public nome: string;
    public cpf: string;

    constructor(nome: string, cpf?: string){
        this.nome=nome;
        if(cpf)
            this.cpf=cpf;
    }
}
