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
var core_1 = require("@angular/core");
var Evento_1 = require("./Evento");
var EventoManagerComponent = (function () {
    function EventoManagerComponent() {
        this.eventoSelecionado = null;
        this.eventoEditar = null;
        this.idEvento = 3;
        this.evento = new Evento_1.Evento(0, '', '');
        this.enviado = false;
        this.editado = false;
        this.eventos = [
            new Evento_1.Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO'),
            new Evento_1.Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI'),
            new Evento_1.Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC')
        ];
    }
    EventoManagerComponent.prototype.preencherNovoEvento = function () {
        this.evento = new Evento_1.Evento(this.idEvento + 1, "", "", "", "", "", "", "", "");
    };
    EventoManagerComponent.prototype.mostrarDetalhes = function (evento) {
        this.eventoSelecionado = evento;
    };
    EventoManagerComponent.prototype.onSubmit = function () {
        console.log(this.evento);
        if (this.editado) {
            var posicao = this.eventos.indexOf(this.eventoEditar);
            this.eventos[posicao] = this.evento;
            this.enviado = true;
        }
        else {
            this.eventos.push(this.evento);
            this.enviado = true;
        }
    };
    EventoManagerComponent.prototype.novoEvento = function () {
        this.preencherNovoEvento();
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
        this.editado = true;
    };
    EventoManagerComponent.prototype.excluirEvento = function (evento) {
        var posicao = this.eventos.indexOf(evento);
        this.eventos.splice(posicao, 1);
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