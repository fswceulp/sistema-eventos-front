import {Palestra} from '../palestras/Palestra';
export class Palestrante {

    nome: string;
    filiacao: string;
    miniBiografia: string;
    linkLattes: string;
    site: string;
    email: string;
    palestra: Palestra[];

    constructor(nome: string, filiacao: string, miniBibliografia: string, linkLattes: string,
    site: string, email: string, palestra: Palestra[]) {
        this.nome = nome;
        this.nome = nome;
    }
}