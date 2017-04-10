import { Artigo } from './Artigo';
export class Evento {
    public idEvento : number;
    public nome : string;
    public sigla : string;
    public inicio : string;
    public termino : string;
    public url : string;
    public cidade : string;
    public estado : string;
    public local : string;
	public artigos : Artigo[];

    constructor(idEvento: number, nome: string, sigla: string, inicio: string, termino: string, url: string, cidade: string, estado: string, local: string, artigos: Artigo[]) {
        this.idEvento = idEvento;
        this.nome = nome;
        this.sigla = sigla;
		this.inicio = inicio;
		this.termino = termino;
		this.url = url;
		this.cidade = cidade;
		this.estado = estado;
		this.local = local;
		this.artigos = artigos;
    }
}