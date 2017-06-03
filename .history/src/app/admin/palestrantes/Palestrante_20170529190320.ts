import {Palestra} from '../palestras/Palestra';
export class Palestrante {

    nome: string;
    filiacao: string;
    miniBiografia: string;
    linkLattes: string;
    site: string;
    email: string;
    palestra: Palestra[];

    constructor(nome: string, filiacao: string, miniBiografia: string, linkLattes: string,
    site: string, email: string, palestra: Palestra[]) {
        this.nome = nome;
        this.filiacao = filiacao;
        this.miniBiografia = miniBiografia;
        this.linkLattes = linkLattes;
        this.site = site;
        this.email = email;
        this.palestra = palestra;
    }
}