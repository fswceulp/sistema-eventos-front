import { Component, OnInit } from '@angular/core';
import { CidadesService } from './cidades.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Cidade } from './Cidade';
@Component({
    templateUrl: 'cidades-lista.component.html'
})
export class CidadesListaComponent implements OnInit {
    cidades: any;
    errorMessage = "";
    excluir: boolean = false;
    selecionada: any = null;
    numPaginas: any;
    totalPaginas: any = [];
    msgErro: String = '';

    constructor(private cidadesService: CidadesService, private activatedRoute: ActivatedRoute, private router: Router) {}

    pegaTodas(){
        this.cidadesService.getAllByPage(1).subscribe(
            cidades => this.cidades = cidades,
            error => this.errorMessage = <any>error);
    }

    ngOnInit() {
        this.pegaTodas();
        this.paginar();
    }

    clickExcluir(cidade: any): void{
        this.excluir = true;
        this.selecionada = cidade;
    }

    clickConfirma(): void{
        this.excluir = false;
        this.excluirCidade(this.selecionada);
    }

    clickCancela(): void{
        this.excluir = false;
        this.selecionada = null;
    }
    
    excluirCidade(cidade: any): void {
        this.cidadesService.delete(cidade.id).subscribe(
            () => {
                this.pegaTodas();
            },
            error => this.errorMessage = <any>error);
    }

    editarCidade(cidade: Cidade){
        this.router.navigate(['admin/cidades/editar/'+cidade.id]);
    }

    paginar(){
        this.cidadesService.all().subscribe(
            cidades => {
                this.numPaginas = cidades.length;
                this.numPaginas = Math.ceil(this.numPaginas/5);
                for(var i=0; i<this.numPaginas; i++)
                    this.cidades.push(i);
            },
            erro => this.msgErro = erro,
        );
    }

    escolherPagina(numeroPagina: number){
        this.cidadesService.getAllByPage(numeroPagina+1).subscribe(
            cidades => this.cidades = cidades,
            erro => this.msgErro = erro,
        );
    }
}