import {Palestra} from '../palestras/Palestra';
export class Palestrante {

    id: number;
    nome: string;
    filiacao: string;
    miniBiografia: string;
    linkLattes: string;
    site: string;
    email: string;
    palestra: Palestra[];

    constructor(id: number, nome: string, filiacao: string, miniBiografia: string, linkLattes: string,
    site: string, email: string, palestra: Palestra[]) {
        this.id = 
        this.nome = nome;
        this.filiacao = filiacao;
        this.miniBiografia = miniBiografia;
        this.linkLattes = linkLattes;
        this.site = site;
        this.email = email;
        this.palestra = palestra;
    }
}