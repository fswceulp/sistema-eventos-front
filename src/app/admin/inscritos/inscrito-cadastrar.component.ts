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
    usuario: Usuario = new Usuario(0,"","");
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
        this.salvarUser();
    }

    salvarUser(){
        console.log(this.usuario);
        this.usuariosService.save(this.usuario).subscribe(
                    usuario =>{ 
                        this.status = true;
                        this.user = usuario;
                        console.log(this.user);
                        this.salvarInsc()
                    },
                    erro => this.msgErro = erro );
        
    }

    salvarInsc(){
        this.inscrito.usuarioId = this.user.id;
        this.inscrito.conferenciaId = this.evento.id;
        console.log(this.inscrito);
        this.inscritosService.save(this.inscrito).subscribe(
                    inscrito => {console.log(inscrito);this.cancelar();},
                    erro => this.msgErro = erro );
    }

    cancelar(){
            this.router.navigate(['/admin/eventos/'+this.evento.id]);
    }
}