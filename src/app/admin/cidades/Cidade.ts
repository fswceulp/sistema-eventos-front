export class Cidade {
    public id: number;
    public nome: string;
    public estadoId: number;

    constructor(id: number, nome: string, estadoId: number) {
        this.id = id;
        this.nome = nome;
        this.estadoId = estadoId;
    }
}