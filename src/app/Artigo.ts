export class Artigo {
    public titulo : string;
    public palavraChave : string;
	public resumo : string;
	public codEvento: number;
    
    constructor(titulo: string, palavraChave: string, resumo: string, codEvento:number) {
        this.titulo = titulo;
        this.palavraChave = palavraChave;
        this.resumo = resumo;
        this.codEvento = codEvento;
    }
}