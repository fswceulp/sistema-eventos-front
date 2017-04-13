import { Autor } from './Autor';

export class Artigo {
    public id: number;
    public titulo: string;
    public autores: Autor[];
    public resumo: string;
    public palavrasChave: string[];

    constructor(titulo: string, autores: Autor[], resumo: string, palavrasChave: string[], id?: number){
        if(id){
            this.id = id;
        }
        this.titulo = titulo;
        this.autores = autores;
        this.resumo = resumo;
        this.palavrasChave = palavrasChave;
    }
}