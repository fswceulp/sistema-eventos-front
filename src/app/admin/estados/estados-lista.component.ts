import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadosService } from './estados.service';
import { Estado } from './Estado';

@Component({
    templateUrl: 'estados-lista.component.html',
	styleUrls: [ 'estados.component.css' ],
	providers: [EstadosService]
})
export class EstadosListaComponent implements OnInit {
 
	estados: Estado[];
	estadoSelecionado:Estado=new Estado('', '');
	estadoPesquisado:Estado=new Estado('', '');
	Filtro:String='';
	
	page:number=1;
	n:number=1;
	pagina:String='';
	
	filtro: string = "";
	errorMessage: string;


    constructor(private estadosService: EstadosService,
        private router: Router) { }
		
	
    ngOnInit(){ 

		this.pagina='?_page='+this.page+'&_limit=6';
			this.estadosService.pagina(this.pagina).
				subscribe(estados => this.estados = estados);
		
		this.getEstados(); 
    }
	atualizar(){
	this.getEstados();
	}
	getEstados() {
	
        this.estadosService.getEstados(this.filtro)
            .subscribe(estados => this.estados = estados,
            error => this.errorMessage = <any>error);
	}
	
	paginacao(n:number){
			this.pagina='?_page='+n+'&_limit=6';
			this.estadosService.pagina(this.pagina).
            subscribe(estados => this.estados = estados);	
	}

	excluirEstado(estado:Estado){
		this.estadosService.delete(estado.id).subscribe(
                estado => console.log(estado),
                erro => console.log(erro));
		this.estados.splice(this.estados.indexOf(estado), 1);
	}
	
	telaCadastro() {
        this.router.navigate(['/admin/estados/cadastro']);
    }
	telaEditar() {
        this.router.navigate(['/admin/estados/'+this.estadoSelecionado.id+'/editar']);
    }
	telaHome() {
        this.router.navigate(['/admin']);
    }
	telaLista(){
		this.router.navigate(['/admin/estados']);
	}

	
	
}