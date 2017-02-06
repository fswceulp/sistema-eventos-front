import { Component } from '@angular/core';
import '../../public/css/style.css';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  eventos: any[];
  eventoSelecionado: any = null;

  constructor() {
    this.eventos = [
      {
        "id": 1,
        "nome": "XIX Congresso de Computação e Sistemas de Informação",
        "sigla": "ENCOINFO",
        "inicio": "2017-05-09",
        "termino": "2017-05-13",
        "url": "http://ulbra-to.br/encoinfo",
        "cidade": "Palmas",
        "estado": "TO",
        "local": "Centro Universitário Luterano de Palmas - CEULP/ULBRA"
      },
      {
        "id": 2,
        "nome": "XIII Simpósio Brasileiro de Sistemas de Informação",
        "sigla": "SBSI",
        "inicio": "2017-06-05",
        "termino": "2017-06-08",
        "url": "http://www.sbc.org.br/sbsi2017",
        "cidade": "Lavras",
        "estado": "MG",
        "local": "Universidade Federal de Lavras - UFLA"
      },
      {
        "id": 3,
        "nome": "XXXVII Congresso da Sociedade Brasileira de Computação",
        "sigla": "CSBC",
        "inicio": "2017-07-02",
        "termino": "2017-07-06",
        "url": "http://www.sbc.org.br/csbc2017",
        "cidade": "São Paulo",
        "estado": "SP",
        "local": "Universidade Presbiteriana Mackenzie"
      }
    ];
  }

  mostrarDetalhes(evento: any) : void {
    this.eventoSelecionado = evento;
  }
}
