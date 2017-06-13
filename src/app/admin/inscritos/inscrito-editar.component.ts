import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { Evento } from '../../eventos/Evento';
import { EventosService} from '../../eventos/eventos.service';

import { Usuario } from './Usuario';
import { InscritosService } from './inscritos.service';
import { UsuariosService } from './usuario.service';

@Component({
    templateUrl: 'inscrito-editar.component.html'
})
export class InscritoEditarComponent implements OnInit {
    constructor(private usuariosService: UsuariosService,private inscritosService: InscritosService,private eventosService: EventosService,private router: Router,private route: ActivatedRoute) { }
    evento: Evento;
    inscrito: any;
    usuario: Usuario = new Usuario(0,"","");
   
    ngOnInit() {
        this.route.params
            .switchMap(params => {
                let id: number = Number.parseInt(params['id']);
                return this.eventosService.find(id);
            })
            .subscribe(evento => this.evento = evento);

        this.route.params
            .switchMap(params => {
                let id: number = Number.parseInt(params['idInsc']);
                return this.inscritosService.find(id);
            })
            .subscribe(inscrito => this.inscrito = inscrito);
    }

    alterar() {
        this.usuariosService.update(this.usuario)
            .subscribe(
                inscrito => console.log(inscrito),
                erro => console.log(erro));
        this.cancelar();
    }

    cancelar(){
            this.router.navigate(['/admin','eventos', this.evento.id]);
    }
}