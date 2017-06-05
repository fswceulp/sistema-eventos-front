import {Palestra} from '../palestras/Palestra';
export class Palestrante {

    public id: number;
    public nome: string;
    public filiacao: string;
    public miniBiografia: string;
    public linkLattes: string;
    public site: string;
    public email: string;
    public palestra: Palestra[];

    constructor(id: number, nome: string, filiacao: string, miniBiografia: string, linkLattes: string,
    site: string, email: string, palestra: Palestra[]) {
        this.id = id;
        this.nome = nome;
        this.filiacao = filiacao;
        this.miniBiografia = miniBiografia;
        this.linkLattes = linkLattes;
        this.site = site;
        this.email = email;
        this.palestra = palestra;
    }
}