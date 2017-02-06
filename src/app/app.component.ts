import { Component } from '@angular/core';
import '../../public/css/style.css';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  eventos: string[];

  constructor() {
    this.eventos = [
      'XIX Congresso de Computação e Sistemas de Informação - ENCOINFO 2017',
      'XIII Simpósio Brasileiro de Sistemas de Informação - SBSI',
      'XXXVII Congresso da Sociedade Brasileira de Computação - CSBC'
    ];
  }
}
