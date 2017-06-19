import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Usuario } from './Usuario'

@Component({
    templateUrl: 'usuarios-lista.component.html'
})
export class UsuariosListaComponent implements OnInit {
    UsuariosService: any;
    usuarios: any;
    status: any;
    msgErro: any;
    idUsuario: number;
    excluido: boolean=false;
    constructor(private usuariosService: UsuariosService, private router: Router) { }

    ngOnInit() {
        this.usuariosService.all()
            .subscribe(usuarios => this.usuarios = usuarios);
    }
    cadastrarUsuario() {
        this.router.navigate(['admin/usuarios/cadastro']);
    }
    excluirUsuario(usuario: Usuario) {
        console.log(usuario);
        this.usuariosService.delete(usuario.id).subscribe(usuarios => this.status = true, erro => this.msgErro = erro);
        this.usuarios.splice(this.usuarios.indexOf(usuario), 1);
    }
    editarUsuario(usuario: Usuario) {
        this.router.navigate(['admin/usuarios/' + this.idUsuario + '/editar']);
    }
}