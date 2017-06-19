import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PalestrantesService } from './palestrante.service';
import { Palestrante } from './Palestrante';
import { Palestra } from '../palestras/Palestra';

@Component({
    templateUrl: 'cadastro.component.html'
})

export class PalestranteCadastroComponent implements OnInit {
    palestra: Palestra = new Palestra('','');
    palestrante: Palestrante = new Palestrante('', '', '', '', '', '', new Palestra('',''), 0);
    palestranteSelecionado: any;
    idEvento: any;
    idPalestrante: number = null;
    status: boolean;
    msgErro: any = '';
    usuarioPermissao: boolean = false;
    usuarioEvento: any;

    constructor(private palestrantesService: PalestrantesService, private activatedRoute: ActivatedRoute
    , private router: Router) { }

    ngOnInit() {
         // subscribe to router event
        this.activatedRoute.params.subscribe((params: Params) => {
            this.idEvento = params['id'];
            this.verificaPermissaoUsuario();
                this.activatedRoute.params.subscribe((params: Params) => {
                    this.idPalestrante = params['idPalestrante'];
                    this.palestrantesService.getPalestranteById(this.idPalestrante).subscribe(
                        palestrante => this.palestrante = palestrante);
                });
        });
    }

    verificaPermissaoUsuario(){

        //Busca os dados do usuário logado no 
        let usuario = JSON.parse(sessionStorage.getItem('usuario'));

        this.palestrantesService.verificaPermissaoUsuario(usuario.id, this.idEvento).subscribe(
            usuarioEvento => {
                this.usuarioEvento = usuarioEvento;
                if(usuario !== null && this.usuarioEvento.length !== 0)
                    this.usuarioPermissao = true;
            },
            erro => this.msgErro = erro,
        );

    }

    save(){
        this.palestrante.idEvento = this.idEvento;
        if(this.idPalestrante!=null){
            this.palestrantesService.update(this.palestrante).subscribe(
                    palestrante => this.status = true,
                    erro => this.msgErro = erro );
        }
        else{
            this.palestrantesService.save(this.palestrante).subscribe(
                    palestrante => this.status = true,
                    erro => this.msgErro = erro );
        }
    }

    voltar(){
        this.router.navigate(['admin/eventos/'+this.idEvento+'/palestrantes']);
    }

}