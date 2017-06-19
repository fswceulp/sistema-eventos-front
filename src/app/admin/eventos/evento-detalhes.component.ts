import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from '../../eventos/Evento';
import { EventosService } from '../../eventos/eventos.service';
import { InscritosService } from '../inscritos/inscritos.service';
import 'rxjs/add/operator/switchMap';


@Component({
    templateUrl: 'evento-detalhes.component.html'
})

export class EventoDetalhesComponent implements OnInit {
    evento: Evento = null;
    inscritos: any[] = [];
    inscritosLista: any[] = [];
    inscrito: any;
    usuarios: any[];
    user: any = null;
    status: any;
    msgErro: string = '';
    filtro: string = "";

    constructor(
        private eventosService: EventosService,
        private inscritosService: InscritosService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        console.log("qualquer");
        this.route.params   
            .switchMap(params => {
                let id: number = Number.parseInt(params['id']);
                return this.eventosService.find(id);
            })
            .subscribe(evento => this.evento = evento);
        this.inscritosService.all()
            .subscribe(inscritos => {
                this.inscritos = inscritos; 
                this.getLista(this.evento.id);
                console.log(this.inscritos);
            });

    }
    getLista(id: number) {
        for (let i = 0; i < this.inscritos.length; i++) {
            if (this.inscritos[i].conferenciaId == id) {
                this.inscritosLista.push(this.inscritos[i]);
            }
        }
    }

    cadastrar(evento) {
        this.router.navigate(['/admin', 'eventos', evento.id, 'inscrito', 'cadastrar']);
    }
    editar(evento, inscrito) {
        this.router.navigate(['/admin', 'eventos', evento.id, 'inscrito', inscrito.id, 'editar']);
    }
    excluir(inscrito: any) {
        this.inscritosService.delete(inscrito.id).subscribe(
            inscrito => this.status = true,
            erro => this.msgErro = erro);
        this.inscritos.splice(this.inscritos.indexOf(inscrito), 1);
        this.inscritosLista.splice(this.inscritosLista.indexOf(inscrito), 1);
    }
    inscLista(filtro: string) {
        let i: any[] = [];
        this.inscritosLista.forEach(inscrito => {
            if (inscrito.usuario.nome.toLowerCase().indexOf(filtro.toLocaleLowerCase()) != -1 || inscrito.usuario.email.toLowerCase().indexOf(filtro.toLocaleLowerCase()) != -1) {
                i.push(inscrito);
            }
        })
        return i;
    }
}