import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Evento } from './evento';
import { EventoService } from './evento.service';

import { Estado } from '../../estado';
import { Cidade } from '../../cidade';
import { EstadoService } from '../../estado.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

//extensão da class Obsevable
import 'rxjs/add/observable/of';

//operadores Observable
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    templateUrl: './eventos.gestao.component.html',
    styleUrls: ['./eventos.component.css'],
    providers: [EventoService, EstadoService]
})

export class EventosGestaoComponent implements OnInit{
    eventos: Evento;
    evento = new Evento();

    estados: Estado[];
    cidades: Cidade[];
    errorMessage: string;
    error: boolean = false;
    salvo: boolean = false;
    title = "Adicionar Evento";
    nomeEvento: string;
    param: string;
    constructor(
        private eventoService: EventoService,
        private estadoService: EstadoService,
        private router: Router,
        private route: ActivatedRoute,
    ){}

    //Inicializa métodos
    ngOnInit(){
        this.getEstados();
            //verifica se tem o id no parametro, se tiver adicionar o metódo getEvento(), reconhecendo que é um update
            this.route.params.subscribe(
                params => {
                    if(params['id']){
                        this.getEvento();
                    }
                }
            );
    }

    //Pega Evento de acordo com o ID passado na rota
    getEvento():void{
        this.route.params
            .switchMap((params: Params ) => this.eventoService.getEvento(+params['id']))
            .subscribe(
                evento => this.evento = evento,
            );
    }

    //Pega Estados
    getEstados(): void{
        this.estadoService.getEstados()
        .subscribe(
            estados => this.estados = estados,
        );
    }

    //Pega Cidades Filtradas a partir do ID do Estado 
    getCidades(estadoId: number){
        this.estadoService.getCidades(estadoId)
        .subscribe(
            cidades => this.cidades = cidades,
        );
    }

    //Salva dados do Formulário (Obs. cria um novo registro)
    salvar(): void {
        this.eventoService.save(this.evento)
            .subscribe(
                evento => {
                    this.evento = evento;
                    this.error = false;
                    this.salvo = true;
                    this.reset();
                    this.nomeEvento = evento.nome;
                },
                error => {
                    this.errorMessage = <any>error;
                    this.error = true;
                    this.salvo = false;
                }
            );
    }

    //Salva dados do Formulário (Obs. atualiza um registro registro)
    atualizar(): void {
        this.eventoService.update(this.evento)
        .subscribe(
            evento => {
                this.evento = evento;
                this.error = false;
                this.salvo = true;
                return;
            },
            error => {
                this.errorMessage = <any>error;
                this.error = true;
                this.salvo = false;
            }
        )
    }

    //Limpa os campos do fomulário após criar um novo registro com sucesso.
    private reset(){
        this.evento.id = null;
        this.evento.nome = null;
        this.evento.descricao = null;
        this.evento.sigla = null;
        this.evento.estadoId = null;
        this.evento.cidadeId = null;
        this.evento.inicio = null;
        this.evento.termino = null;
        this.evento.palavras_chave = null;
    }

    gotoDetail(): void {
        this.router.navigate(['/eventos', this.evento.id]);
    }
}