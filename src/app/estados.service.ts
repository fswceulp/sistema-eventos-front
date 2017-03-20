import { Injectable } from '@angular/core';

@Injectable()
export class EstadosService {
    estados : any[];

    constructor() {
        this.estados = [
            {uf: 'TO', nome: 'Tocantins'},
            {uf: 'GO', nome: 'Goiás'},
            {uf: 'MG', nome: 'Minas Gerais'},
            {uf: 'SP', nome: 'São Paulo'},
            {uf: 'RJ', nome: 'Rio de Janeiro'}
        ];
    }

    all() {
        return this.estados;
    }
}
