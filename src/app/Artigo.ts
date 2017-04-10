import { Autor } from './Autor';
export class Artigo {
	public idArtigo: number;
    public titulo: string;
    public autores: Autor[];
    public resumo: string;
    public pChave : string[];

	constructor(idArtigo: number, titulo: string, autores: Autor[], resumo: string, pChave: string[]){
		this.idArtigo = idArtigo;
		this.titulo = titulo;
		this.autores = autores;
		this.resumo = resumo;
		this.pChave = pChave;
	}
}