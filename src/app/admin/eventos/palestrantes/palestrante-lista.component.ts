import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PalestrantesService } from './palestrante.service';
import { Palestrante } from './Palestrante';
import { Palestra } from '../palestras/Palestra';

@Component({
    templateUrl: 'palestrante-lista.component.html'
})

export class PalestranteListaComponent implements OnInit {
    palestrantes: any;
    palestranteSelecionado: Palestrante = new Palestrante('', '', '', '', '', '', new Palestra('',''), 0);
    idEvento: number;
    resumo: any;
    status: any;
    msgErro: string = '';

    constructor(private palestrantesService: PalestrantesService, private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit() { 
        // subscribe to router event
        this.activatedRoute.params.subscribe((params: Params) => {
            this.idEvento = params['id'];
        });

        this.palestrantesService.all(this.idEvento)
            .subscribe(
            palestrantes => this.palestrantes = palestrantes,
            erro => this.msgErro = erro
            );
        
    }
    
    getAllOrderByName(){
        this.palestrantesService.getAllOrderByNome(this.idEvento)
            .subscribe(
            palestrantes => this.palestrantes = palestrantes,
            erro => this.msgErro = erro
            );
    }
    
    getAllOrderByEmail(){
        this.palestrantesService.getAllOrderByEmail(this.idEvento)
            .subscribe(
            palestrantes => this.palestrantes = palestrantes,
            erro => this.msgErro = erro
            );
    }
    
    getAllOrderByTituloPalestra(){
        this.palestrantesService.getAllOrderByTituloPalestra(this.idEvento)
            .subscribe(
            palestrantes => this.palestrantes = palestrantes,
            erro => this.msgErro = erro
            );
    }

    editarPalestrante(palestrante: Palestrante){
        this.router.navigate(['admin/eventos/'+this.idEvento+'/palestrantes/'+palestrante.id+'/editar']);
    }

    excluirPalestrante(palestrante: Palestrante){
        this.palestrantesService.delete(palestrante.id).subscribe(
                palestrante => this.status = true,
                erro => this.msgErro = erro);
        this.palestrantes.splice(this.palestrantes.indexOf(palestrante), 1);
    }
    
    cadastrarPalestrante(){
        this.router.navigate(['admin/eventos/'+this.idEvento+'/palestrantes/cadastro']);
    }
}