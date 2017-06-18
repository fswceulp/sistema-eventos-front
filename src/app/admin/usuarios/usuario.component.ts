import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './Usuario';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    templateUrl: 'cadastro.component.html'
})
export class UsuarioCadastroComponent implements OnInit {
    usuarios: any;
    usuario: Usuario = new Usuario("", "", "", "", "", 0);
    idUsuario: number = null;
    status: any;
    msgErro: any;
    editaUsuario: any;
    constructor(private UsuariosService: UsuariosService, private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.idUsuario = params['idUsuario'];
            this.UsuariosService.getUsuarioById(this.idUsuario).subscribe(
                usuario => this.usuario = usuario);
        });
    }
    save() {
        this.UsuariosService.save(this.usuario)
            .subscribe(usuario => this.status = true, erro => this.msgErro = erro);

    }

    edita() {
        this.UsuariosService.update(this.usuario)
            .subscribe(usuario => this.status = true, erro => this.msgErro = erro);
    }

    onSubmit(): void {
        this.UsuariosService.save(this.usuario).subscribe(
            usuario => this.status = true,
            erro => this.msgErro = erro);
    }
}