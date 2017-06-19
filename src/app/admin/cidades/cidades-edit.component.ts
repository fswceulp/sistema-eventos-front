import { Component, OnInit } from '@angular/core';
import { CidadesService } from './cidades.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Cidade } from './Cidade';
@Component({
    templateUrl: 'cidades-edit.component.html'
})
export class CidadesEditComponent implements OnInit {
    cidade: Cidade = new Cidade(0, '', 0);
    estados: any;
    errorMessage = "";

    constructor(private cidadesService: CidadesService, private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit() {
    }

    preencherNova(): void {
        this.cidade = new Cidade(0, '', 0);
    }

    salvar() {
        this.cidadesService.save(this.cidade.nome, this.cidade.estadoId)
            .subscribe(
                erro => console.log(erro));
    }

    onSubmit() : void {
        this.salvar();
        this.preencherNova();
        this.router.navigate(['admin/cidades/']);
    }

    pegaEstados(){
        this.cidadesService.estados().subscribe(
            estados => this.estados = estados,
            error => this.errorMessage = <any>error);

        return this.estados;
    }
}