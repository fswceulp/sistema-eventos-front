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
    inscrito: any;
    usuarios: any[];
    
    status: any;
    msgErro: string = '';
    

    constructor(
        private eventosService: EventosService,
        private inscritosService: InscritosService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.route.params
            .switchMap(params => {
                let id: number = Number.parseInt(params['id']);
                return this.eventosService.find(id);
            })
            .subscribe(evento => this.evento = evento );

        // this.route.params
        //     .switchMap(params => {
        //         let id: number = Number.parseInt(params['id']);
        //         return this.inscritosService.findInsc(id);
        //     })
        //     .subscribe(inscritos => this.inscritos = inscritos );

        this.inscritosService.all().
           subscribe(inscritos => this.inscritos = inscritos);
    }

    

    cadastrar(evento){
            this.router.navigate(['/admin','eventos', evento.id,'inscrito','cadastrar']);
    }
    editar(evento,inscrito){
            this.router.navigate(['/admin','eventos', evento.id,'inscrito',inscrito.id,'editar']);
    }
    excluir(inscrito: any){
        this.inscritosService.delete(inscrito.id).subscribe(
                inscrito => this.status = true,
                erro => this.msgErro = erro);
        this.inscritos.splice(this.inscritos.indexOf(inscrito), 1);
    }
}