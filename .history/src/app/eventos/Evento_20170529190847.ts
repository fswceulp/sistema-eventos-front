import {Palestrante} from './palestrantes/Palestrante';
export class Evento {
    public id: number;
    public nome: string;
    public sigla: string;
    public inicio: string;
    public termino: string;
    public url: string;
    public cidade: string;
    public estado: string;
    public local: string;
    public palestrantes: Palestrante[];

    constructor(id: number, nome: string, sigla: string, inicio: string, termino: string, url: string,
    cidade: string, estado: string, local: string, palestrantes: Palestrante[]) {
        this.id = id;
        this.nome = nome;
        this.inicio = inicio;
        this.termino = termino;
        this.url = url;
        this.cidade = cidade;
        this.estado = estado;
        this.local = local;
        this.sigla = sigla;
    }
}
