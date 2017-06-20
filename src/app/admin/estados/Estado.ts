export class Estado {
    public id: number;
    public nome: string;
    public uf: string;
    
    constructor(nome: string, uf: string) {
        this.nome = nome;
        this.uf = uf;
    }
}
