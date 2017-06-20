import { Component, OnInit } from '@angular/core';
import { EstadosService } from './estados.service';
import { Router } from '@angular/router';
import { Estado } from './Estado';


@Component({
    templateUrl: 'cadastro.component.html'
})
export class EstadoCadastroComponent implements OnInit {
    constructor(private estadosService: EstadosService,
        private router: Router) { 
		this.preencherEstado();
	}
	
  
	estado: Estado = new Estado('', '');

    ngOnInit() {}
	
	onSubmit() {
	this.estadosService.save(this.estado.nome, this.estado.uf)
            .subscribe(
                estado => console.log(estado),
                erro => console.log(erro));
				
	this.telaHome();
	}

	preencherEstado(): void {
    this.estado = new Estado('','');
  }
  telaHome() {
        this.router.navigate(['/admin/estados']);
    }
}