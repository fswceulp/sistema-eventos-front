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
        this.evento = new Evento_1.Evento(0, '', '', '', '', '', '', '', '');
        this.enviado = false;
        this.eventos = [
            new Evento_1.Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO', '15-05-2017', '18-05-2017', 'http://ulbra-to.br/encoinfo/site/', 'Palmas', 'TO', 'CEULP/ULBRA'),
            new Evento_1.Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI', '05-06-2017', '08-06-2017', 'http://sbsi2017.dcc.ufla.br/', 'Lavras', 'MG', 'UFLA'),
            new Evento_1.Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC', '02-06-2017', '06-06-2017', 'http://csbc2017.mackenzie.br/', 'São Paulo', 'SP', 'Universidade Presbiteriana Mackenzie')
        ];
    }
    EventoManagerComponent.prototype.preencherNovoEvento = function () {
        this.evento = new Evento_1.Evento(0, '', '', '', '', '', '', '', '');
    };
    EventoManagerComponent.prototype.mostrarDetalhes = function (evento) {
        this.eventoSelecionado = evento;
    };
    EventoManagerComponent.prototype.onSubmit = function () {
        console.log(this.evento);
        this.eventos.push(this.evento);
        this.enviado = true;
    };
    EventoManagerComponent.prototype.novoEvento = function () {
        this.preencherNovoEvento();
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