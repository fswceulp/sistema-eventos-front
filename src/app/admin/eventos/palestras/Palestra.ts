export class Palestra {

    public id: number;
    public nome: string;
    public resumo: string;

    constructor(nome: string, resumo: string) {
        this.nome = nome;
        this.resumo = resumo;
    }
}