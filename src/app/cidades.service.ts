import { Injectable } from '@angular/core';

@Injectable()
export class CidadesService {
    cidades : any[];

    constructor() {
        this.cidades = [
            {nome: 'Palmas', uf: 'TO'},
            {nome: 'Paraíso do Tocantins', uf: 'TO'},
            {nome: 'Gurupi', uf: 'TO'},
            {nome: 'Araguaína', uf: 'TO'},
            {nome: 'Porto Nacional', uf: 'TO'},
            {nome: 'Belo Horizonte', uf: 'MG'},
            {nome: 'Goiânia', uf: 'GO'},
            {nome: 'São Paulo', uf: 'SP'},
            {nome: 'Rio de Janeiro', uf: 'RJ'}
        ];
    }

    all() {
        return this.cidades;
    }

    allByUf(uf: string) {
        let lista: any[] = [];
        for(let i = 0; i < this.cidades.length; i++) {
        if (this.cidades[i].uf == uf) {
            lista.push(this.cidades[i]);
        }
        }
        return lista;
    }
}
