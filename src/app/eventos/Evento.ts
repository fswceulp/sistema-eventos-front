export class Evento {
    public id: number;
    public nome: string;
    public sigla: string;
    public inicio: string;
    public termino: string;
    public local: string;
    public cidadeId: number;
	public url: string;
	
    constructor(id: number, nome: string, sigla: string) {
        this.id = id;
        this.nome = nome;
        this.sigla = sigla;
    }
}
