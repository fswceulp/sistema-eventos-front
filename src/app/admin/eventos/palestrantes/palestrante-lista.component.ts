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
    totalPaginas: any = [];
    numPaginas: any;
    palestrantesFiltrados: any;
    filtro: string = '';
    usuarioPermissao: boolean = false;
    usuarioEvento: any;

    constructor(private palestrantesService: PalestrantesService, private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        // subscribe to router event
        this.activatedRoute.params.subscribe((params: Params) => {
            this.idEvento = params['id'];
            this.verificaPermissaoUsuario();
        });

        this.palestrantesService.getAllByPage(1,this.idEvento).subscribe(
            palestrantes => this.palestrantes = palestrantes,
            erro => this.msgErro = erro,
        );

        this.paginar();
        this.filtrar();
    }

    verificaPermissaoUsuario(){

        /*
        * Simular que um usuário está logado
        * userId: 1 para administrador do evento 1 (Neste estão os palestrantes), 
        * userId: 1 para administrador do evento 2,
        * userId: 2 para administrador do evento 3,
        */
        sessionStorage.setItem('usuario', JSON.stringify({
            id: 1,
            nome: "admin",
            senha: "admin"
        }));
        
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
    
    paginar(){
        this.palestrantesService.all(this.idEvento).subscribe(
            palestrantes => {
                this.numPaginas = palestrantes.length;
                this.numPaginas = Math.ceil(this.numPaginas/5);
                for(var i=0; i < this.numPaginas; i++)
                    this.totalPaginas.push(i);
            },
            erro => this.msgErro = erro,
        );
    }
    
    escolherPagina(numeroPagina: number){
        this.palestrantesService.getAllByPage(numeroPagina+1, this.idEvento).subscribe(
            palestrantes => this.palestrantes = palestrantes,
            erro => this.msgErro = erro,
        );
    }

    filtrar(){
        if(this.filtro === undefined || this.filtro === ''){
            this.filtro = '';
            this.palestrantesService.all(this.idEvento).subscribe(
                palestrantes => this.palestrantesFiltrados = palestrantes
            );

            return this.palestrantesFiltrados;
        }
        else{
           if(this.palestrantesFiltrados !== undefined){     
                return this.palestrantesFiltrados.filter((v) => {
                    if(v.nome.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0 ||
                        v.email.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
                        v.filiacao.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
                            return true;
                    }
                    return false;
                });
           }
        }

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