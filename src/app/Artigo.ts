/**
 * Artigo
 */
import {Autor} from './Autor';

export class Artigo {

    public id: number;
    public titulo: string;
    public resumo: string;
    public autores: Autor[];
    public palavrasChave: string[];

    constructor(titulo: string,resumo: string, autores: Autor[],palavrasChave: string[]) {
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
        this.palavrasChave = palavrasChave;
    }
}