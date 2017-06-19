export class Artigo {
    public id: number;
    public titulo: string;
    public autor: string;
    public resumo: string;
    public palavraChave: string;
    public urlArtigo: string;
	public eventoId: number;
	
    constructor(id: number, titulo: string, autor: string, eventoId: number) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
		this.eventoId = eventoId;
    }
}
