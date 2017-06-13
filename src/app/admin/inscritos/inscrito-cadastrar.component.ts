import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { Evento } from '../../eventos/Evento';
import { Usuario } from './Usuario';
import { EventosService} from '../../eventos/eventos.service';
import { InscritosService } from './inscritos.service';
import { UsuariosService } from './usuario.service';


@Component({
    templateUrl: 'inscrito-cadastrar.component.html'
})
export class InscritoCadastroComponent implements OnInit {
    constructor(private usuariosService: UsuariosService,private inscritosService: InscritosService,private eventosService: EventosService,private router: Router,private route: ActivatedRoute) { }
    evento: Evento = null;
    usuario: Usuario = new Usuario(0,"leo","leo");
    inscrito: any = {conferenciaId: 1,usuarioId: 3};
    user: Usuario = new Usuario(0,"","");
    status: any;
    msgErro: string = '';

    ngOnInit() {
        this.route.params
            .switchMap(params => {
                let id: number = Number.parseInt(params['id']);
                return this.eventosService.find(id);
            })
            .subscribe(evento => this.evento = evento );
    }

    salvar() {
        //this.salvarUser(this.usuario);   
        this.inscritosService.save(this.inscrito).subscribe(
                    inscrito => this.status = true,
                    erro => this.msgErro = erro );
        this.cancelar();
    }

    salvarUser(usuario: any){
        console.log(this.usuario);
        this.usuariosService.save(usuario).subscribe(
                    usuario => this.status = true,
                    erro => this.msgErro = erro );
    }

    cancelar(){
            this.router.navigate(['/admin','eventos', this.evento.id]);
    }
}