import { Component } from '@angular/core';
import { Evento } from './Evento';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html'
})
export class EventoManagerComponent {
  eventos: Evento[];
  eventoSelecionado: Evento = null;
  evento: Evento = new Evento(0, '', '');
  enviado: boolean = false;
  estados: any[];
  cidades: any[];

  constructor() {
    this.eventos = [
      new Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO'),
      new Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI'),
      new Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC')
    ];
    this.estados = [
      {uf: 'TO', nome: 'Tocantins'},
      {uf: 'GO', nome: 'Goiás'},
      {uf: 'MG', nome: 'Minas Gerais'},
      {uf: 'SP', nome: 'São Paulo'},
      {uf: 'RJ', nome: 'Rio de Janeiro'}
    ];
    this.cidades = [
      {nome: 'Palmas', uf: 'TO'},
      {nome: 'Paraíso do Tocantins', uf: 'TO'},
      {nome: 'Gurupi', uf: 'TO'},
      {nome: 'Araguaína', uf: 'TO'},
      {nome: 'Porto Nacional', uf: 'TO'},
      {nome: 'Belo Horizonte', uf: 'MG'},
      {nome: 'Goiânia', uf: 'GO'},
      {nome: 'São Paulo', uf: 'SP'},
      {nome: 'Rio de Janeiro', uf: 'RJ'}
    ];
  }

  getCidades(uf: string) {
    let lista: any[] = [];
    for(let i = 0; i < this.cidades.length; i++) {
      if (this.cidades[i].uf == uf) {
        lista.push(this.cidades[i]);
      }
    }
    return lista;
  }

  preencherNovoEvento(): void {
    this.evento = new Evento(0, "", "");
  }

  mostrarDetalhes(evento: Evento) : void {
    this.eventoSelecionado = evento;
  }

  onSubmit() : void {
    console.log(this.evento);
    this.eventos.push(this.evento);
    this.enviado = true;
  }

  novoEvento() : void {
    this.preencherNovoEvento();
  }
}
