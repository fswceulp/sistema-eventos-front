export class Artigo {
    public id: number;
    public titulo: string;
    public idEvento: number;
    
    constructor(titulo: string, idEvento: number) {
        this.titulo = titulo;
        this.idEvento = idEvento;
    }
}