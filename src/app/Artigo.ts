import {Autor} from './Autor';

export class Artigo{
    public id: number;
    public titulo: string;
    public palavrasChave: string[];
    public autores: Autor[];
    public resumo: string;
    public idEvento: number;

    constructor(id: number, titulo: string, palavrasChave: string[], resumo: string, autores: Autor[], idEvento: number){
        this.id = id;
        this.titulo = titulo;
        this.palavrasChave = palavrasChave;
        this.resumo = resumo;
        this.autores = autores;
        this.idEvento = idEvento;
    }
}