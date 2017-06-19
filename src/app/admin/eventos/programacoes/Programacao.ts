export class Programacao{
    public id: number;
    public idEvento: number;
    public nome: string;
    public descricao: string;
    public local: string;
    public datahorainicio: string;
    public datahoratermino: string;
    public artigo: number;
    public palestra: number;

    constructor(id: number, idEvento: number, nome: string, descricao: string, local: string, datahorainicio: string, datahoratermino: string, artigo: number, palestra: number){
        this.id = id;
        this.idEvento = idEvento;
        this.nome = nome;
        this.descricao = descricao;
        this.local = local;
        this.datahorainicio = datahorainicio;
        this.datahoratermino = datahoratermino;
        this.artigo = artigo;
        this.palestra = palestra;
    }
}