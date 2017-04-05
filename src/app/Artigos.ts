import {Autor} from './Autor';

export class Artigo{
    public id: number;
    public titulo: string;
    public palavrasChave: string[];
    public autores: Autor[];
    public resume: string;

    constructor(id: number, titulo: string, palavrasChave: string[], autores: Autor[], resume: string){
        this.id = id;
        this.titulo = titulo;
        this.palavrasChave = palavrasChave;
        this.autores = autores;
        this.resume = resume
    }
}