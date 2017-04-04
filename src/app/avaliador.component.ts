import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppComponent } from './app.component';

@Component({
    selector: 'avaliador',
    templateUrl: './avaliador.component.html'
})
export class AvaliadorComponent implements OnInit {
    eventos : any[];
    eventoSelecionado: any = null;
    artigoSelecionado: any = null;
    avaliacao : any;
    avaliador : string;

    constructor() {

    }

    ngOnInit(): void {
        this.avaliacao = {
            "avaliador": "",
            "qualidadeTecnica": 0,
            "inovacao": 0,
            "resultados": 0,
            "metodologia": 0,
            "adequacao": 0
        };
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
        this.avaliador = AppComponent.usuario;
    }

    carregarArtigos(evento: any) {
        this.avaliador = AppComponent.usuario;
        this.eventoSelecionado = evento;
    }

    excluirAvaliacao(avaliacao: any) {
        let i = this.artigoSelecionado.avaliacoes.indexOf(avaliacao);
        this.artigoSelecionado.avaliacoes.splice(i, 1);
    }

    salvarAvaliacao() {
        let a = {
            "avaliador": this.avaliacao.avaliador,
            "qualidadeTecnica": this.avaliacao.qualidadeTecnica,
            "inovacao": this.avaliacao.inovacao,
            "resultados": this.avaliacao.resultados,
            "metodologia": this.avaliacao.metodologia,
            "adequacao": this.avaliacao.adequacao
        };
        this.artigoSelecionado.avaliacoes.push(a);
        this.avaliacao = {
            "avaliador": "",
            "qualidadeTecnica": 0,
            "inovacao": 0,
            "resultados": 0,
            "metodologia": 0,
            "adequacao": 0
        };
    }
    
    getAvaliacoes() {
        let lista : any[] = [];
        for(var avaliacao of this.artigoSelecionado.avaliacoes) {
            if (avaliacao.avaliador == this.avaliador) {
                lista.push(avaliacao);
            }
        }
        return lista;
    }
}
