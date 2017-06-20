import { Component, OnInit } from '@angular/core';
import { EstadosService } from './estados.service';
import { Router } from '@angular/router';
import { Estado } from './Estado';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/find';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'editar.component.html'
})
export class EstadoEditarComponent implements OnInit {
    constructor(private estadosService: EstadosService,
        private router: Router,
		private route: ActivatedRoute ) { 
		this.editarEstado(this.estado);
	}
	estado: Estado = new Estado('', '');

	ngOnInit() {
    this.route.params
        .switchMap(params => {
            
			let id:number = Number.parseInt(this.route.snapshot.paramMap.get('id'));
            return this.estadosService.find(id);
        })
        .subscribe(estado => this.estado = estado );
		
	}
	
	onSubmit() {
	this.estadosService.update(this.estado.id,this.estado.nome, this.estado.uf)
            .subscribe(
                estado => console.log(estado),
                erro => console.log(erro));
	this.telaHome();			
	}
	
	editarEstado(estado: Estado){
    
    this.estado.nome = estado.nome;
    this.estado.uf = estado.uf;
	}
	
	telaHome() {
        this.router.navigate(['/admin/estados']);
    }
}