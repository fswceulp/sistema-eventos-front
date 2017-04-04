import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
    selector: 'admin-manager',
    templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
    eventos : any[];
    artigoSelecionado: any = null;

    constructor() {

    }

    ngOnInit(): void {
        this.eventos = [
            {
                "nome": "ENCOINFO 2017",
                "artigos": [
                    {
                        "titulo": "programação web",
                        "autor": "josé",
                        "avaliacoes": [
                            {
                                "avaliador": "Avaliador 1",
                                "qualidadeTecnica": 1,
                                "inovacao": 1,
                                "resultados": 1,
                                "metodologia": 1,
                                "adequacao": 1
                            },
                            {
                                "avaliador": "Avaliador 2",
                                "qualidadeTecnica": 1,
                                "inovacao": 1,
                                "resultados": 1,
                                "metodologia": 1,
                                "adequacao": 1
                            }
                        ],
                        "pontuacaoFinal": 1
                    }
                ]
            },
            {
                "nome": "ENCOINFO 2016"
            }
        ];
    }

    
}
