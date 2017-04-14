"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Evento_1 = require("./Evento");
var EventoManagerComponent = (function () {
    function EventoManagerComponent() {
        this.eventoSelecionado = null;
        this.eventoEditar = null;
        this.idEvento = 3;
        this.evento = new Evento_1.Evento(0, '', '');
        this.enviado = false;
        this.editar = false;
        this.editado = false;
        this.tresPrimeiros = [];
        this.home = true;
        this.listaEventos = false;
        this.detalhesEvento = false;
        this.formularioCadastro = false;
        this.formularioEditar = false;
        this.confirmarExclusao = false;
        this.eventos = [
            new Evento_1.Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO'),
            new Evento_1.Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI'),
            new Evento_1.Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC'),
            new Evento_1.Evento(4, 'Encontro Nacional de Informática', 'EnaInfo'),
            new Evento_1.Evento(5, 'Congresso Nacional de Computação - USP', 'CNC-USP')
        ];
        this.pegarTresPrimeiros();
    }
    EventoManagerComponent.prototype.pegarTresPrimeiros = function () {
        this.tresPrimeiros = [];
        if (this.eventos.length > 3) {
            for (var i = 0; i < 3; i++) {
                this.tresPrimeiros[i] = this.eventos[i];
            }
        }
        else {
            for (var i = 0; i < this.eventos.length; i++) {
                this.tresPrimeiros[i] = this.eventos[i];
            }
        }
    };
    EventoManagerComponent.prototype.preencherNovoEvento = function () {
        this.evento = new Evento_1.Evento(this.idEvento + 1, "", "", "", "", "", "", "", "");
    };
    EventoManagerComponent.prototype.mostrarDetalhes = function (evento) {
        this.eventoSelecionado = evento;
        this.selecionarTela("detalhes");
    };
    EventoManagerComponent.prototype.onSubmit = function () {
        console.log(this.evento);
        if (this.editar) {
            var posicao = this.eventos.indexOf(this.eventoEditar);
            this.eventos[posicao] = this.evento;
            this.editado = true;
            this.selecionarTela("lista-eventos");
        }
        else {
            this.eventos.push(this.evento);
            this.enviado = true;
            this.selecionarTela("lista-eventos");
        }
    };
    EventoManagerComponent.prototype.esconderMensagem = function () {
        this.editado = false;
    };
    EventoManagerComponent.prototype.novoEvento = function () {
        this.preencherNovoEvento();
        this.selecionarTela("cadastro");
    };
    EventoManagerComponent.prototype.editarEvento = function (evento) {
        this.eventoEditar = evento;
        this.evento.nome = evento.nome;
        this.evento.sigla = evento.sigla;
        this.evento.inicio = evento.inicio;
        this.evento.termino = evento.termino;
        this.evento.url = evento.url;
        this.evento.cidade = evento.cidade;
        this.evento.estado = evento.estado;
        this.evento.local = evento.local;
        this.editar = true;
        this.selecionarTela("editar");
    };
    EventoManagerComponent.prototype.excluirEvento = function (evento) {
        var posicao = this.eventos.indexOf(evento);
        this.eventos.splice(posicao, 1);
    };
    EventoManagerComponent.prototype.confirmarExlusao = function () {
    };
    EventoManagerComponent.prototype.selecionarTela = function (tela) {
        if (tela == 'lista-eventos') {
            this.resetTelas();
            this.listaEventos = true;
        }
        else if (tela == 'home') {
            this.pegarTresPrimeiros();
            this.resetTelas();
            this.home = true;
        }
        else if (tela == "detalhes") {
            this.resetTelas();
            this.detalhesEvento = true;
        }
        else if (tela == "cadastro") {
            this.resetTelas();
            this.formularioCadastro = true;
        }
        else if (tela == "editar") {
            this.resetTelas();
            this.formularioEditar = true;
        }
        else if (tela == "confirmarExclusao") {
            this.resetTelas();
            this.confirmarExclusao = true;
        }
        else {
            this.resetTelas();
        }
    };
    EventoManagerComponent.prototype.resetTelas = function () {
        this.home = false;
        this.listaEventos = false;
        this.detalhesEvento = false;
        this.formularioCadastro = false;
        this.formularioEditar = false;
        this.confirmarExclusao = false;
    };
    return EventoManagerComponent;
}());
EventoManagerComponent = __decorate([
    core_1.Component({
        selector: 'evento-manager',
        templateUrl: './evento-manager.component.html'
    }),
    __metadata("design:paramtypes", [])
], EventoManagerComponent);
exports.EventoManagerComponent = EventoManagerComponent;
//# sourceMappingURL=evento-manager.component.js.map