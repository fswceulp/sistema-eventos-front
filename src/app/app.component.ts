import { Component } from '@angular/core';
import '../../public/css/style.css';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  eventos: any[];

  constructor() {
    this.eventos = [
      {
        "id": 1,
        "nome": "XIX Congresso de Computação e Sistemas de Informação",
        "sigla": "ENCOINFO",
        "ano": 2017,
        "mes": "maio"
      },
      {
        "id": 2,
        "nome": "XIII Simpósio Brasileiro de Sistemas de Informação",
        "sigla": "SBSI",
        "ano": 2017,
        "mes": "junho"
      },
      {
        "id": 3,
        "nome": "XXXVII Congresso da Sociedade Brasileira de Computação",
        "sigla": "CSBC",
        "ano": 2017,
        "mes": "julho"
      }
    ];
  }
}
