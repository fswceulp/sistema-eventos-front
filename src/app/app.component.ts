import { Component } from '@angular/core';
import { AlunoServico } from './Aluno.service';
import { TurmaServico } from './turma.service';
import { DesempenhoServico } from './desempenho.service';
import '../../public/css/style.css';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [AlunoServico, TurmaServico, DesempenhoServico]
})
export class AppComponent {

}
