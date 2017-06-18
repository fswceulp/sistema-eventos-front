import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

//extensão da class Obsevable
import 'rxjs/add/observable/of';
//operadores Observable
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Evento } from './evento';
import { EventoService } from './evento.service';
import { FormsModule } from '@angular/forms';

import { Usuario } from '../../usuario/usuario';
import { UsuarioService } from '../../usuario/usuario.service';
import { UsuariosComponent } from '../../usuario/usuarios.component';


@Component({
    selector: 'my-eventos',
    templateUrl: './eventos.component.html',
    styleUrls: ['./eventos.component.css'],
    providers: [EventoService]
})

export class EventosComponent implements OnInit{
    title = 'Eventos Cadastrados';
    eventos: Evento[];
    deletado:boolean = false;
    error:boolean = false;
    evento = new Evento();
    eventoSelecionado = new Evento();
    termo: string = "";

    showDialog = false;

    // Paginacao
    paginaAtual:number = 1; //Página atual
    paginaProxima: number; //Próxima página
    paginaAnterior: number; //Página anterior
    paginaUltima:number; // Útilma Página
    paginaNumero:number; //Numero total de páginas 
    paginaTotal: any = []; //Array com o número de páginas
    paginaActive:boolean=false;
    totalRegistros:number=0;


    constructor(
        private eventoService: EventoService,
        private router: Router
    ){}
    
    ngOnInit(): void{
        this.getEventosFiltro(this.termo);
        this.paginacao();
    }

    getEventosFiltro(termo: string = null): void{
        this.eventoService.getEventosFiltro(this.termo, this.paginaAtual)
            .subscribe(
                eventos => {
                    this.eventos = eventos
                }
            );
    }
    getTermo(): void{
       this.getEventosFiltro(this.termo);
    }

    deletar(evento: Evento):void{
        this.eventoService.delete(evento)
        .subscribe(
            eventos => {
                this.evento = eventos;
                this.deletado = true;
                this.error = false;
                this.atualizar();
            },
            error => {
                this.deletado = false;
                this.error = true;
            }
        );
    }

    atualizar() {
        this.getEventosFiltro(this.termo);
    }


    paginacaoProxima(){
        this.paginaProxima = this.paginaAtual + 1;
        this.paginaAtual = this.paginaProxima;
        this.getEventosFiltro(this.termo);
    }
    paginacaoAnterior(){
        this.paginaAnterior = this.paginaAtual - 1;
        this.paginaAtual = this.paginaAnterior;
        this.getEventosFiltro(this.termo);
    }

    paginacaoUltima(){
        this.paginaAtual = this.paginaUltima;
        this.getEventosFiltro(this.termo);
    }

    paginacaoPrimeira(){
        this.paginaAtual = 1;
        this.getEventosFiltro(this.termo);
    }

    paginacaoNavegacao(pagina:number){
        this.paginaAtual = pagina;
        this.getEventosFiltro(this.termo);
        this.paginaActive = true;
    }

    paginacao():void{
        this.eventoService.getEventos()
            .subscribe(
                eventos => {
                    this.totalRegistros = eventos.length
                    this.paginaNumero = Math.ceil(this.totalRegistros/6);
                    this.paginaUltima = this.paginaNumero;
                    for(var i=0; i < this.paginaNumero; i++)
                    this.paginaTotal.push(i);
                }
            );
    }

}
