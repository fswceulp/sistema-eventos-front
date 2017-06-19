import { Component, OnInit } from '@angular/core';
import { CidadesService } from './cidades.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Cidade } from './Cidade';
@Component({
    templateUrl: 'cidades-form.component.html'
})
export class CidadesFormComponent implements OnInit {
    cidade: Cidade = new Cidade(0, '', 0);
    idCidade: number = null;
    status: boolean;
    estados: any;
    errorMessage = "";
    msgErro: any = '';

    constructor(private cidadesService: CidadesService, private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.idCidade = params['id'];
                this.activatedRoute.params.subscribe((params: Params) => {
                    this.idCidade = params['idCidade'];
                    this.cidadesService.getCidadeById(this.idCidade).subscribe(
                        cidade => this.cidade = cidade);
                });
        });
    }

    preencherNova(): void {
        this.cidade = new Cidade(0, '', 0);
    }

    salvar() {
        this.cidade.id = this.idCidade;
        if(this.idCidade != null){
            this.cidadesService.update(this.cidade.id, this.cidade.nome, this.cidade.estadoId)
                                    .subscribe(
                                        cidade => this.status = true,
                                        erro => this.msgErro = erro);
        }
        else{
            this.cidadesService.save(this.cidade.nome, this.cidade.estadoId)
                        .subscribe(
                            cidade => this.status = true,
                            erro => this.msgErro = erro);
        }
    }

    onSubmit() : void {
        this.salvar();
        this.preencherNova();
    }

    pegaEstados(){
        this.cidadesService.estados().subscribe(
            estados => this.estados = estados,
            error => this.errorMessage = <any>error);

        return this.estados;
    }

    voltar(){
        this.router.navigate(['admin/cidades/']);
    }
}