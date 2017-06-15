import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './Usuario';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
    templateUrl: 'cadastro.component.html'
})
export class UsuarioCadastroComponent implements OnInit {
    usuarios: any;
    usuario: Usuario = new Usuario("","","","","", 0);
    idUsuario: any;
    status: any;
    msgErro: any;
    usuarioSelecionado: any;
    constructor(private UsuariosService: UsuariosService, private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        /*this.UsuariosService.all()
            .subscribe(usuarios => this.usuarios = usuarios);*/
    }
    save(): void {
        this.usuario = new Usuario("","","","","", 0);
    }

    onSubmit(): void {
        this.UsuariosService.save(this.usuario).subscribe(
                usuario => this.status = true,
                erro => this.msgErro = erro );
    }
}