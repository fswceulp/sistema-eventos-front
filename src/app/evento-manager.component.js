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
        this.evento = new Evento_1.Evento(0, '', '');
        this.enviado = false;
        this.editando = false;
        this.editado = false;
        this.eventos = [];
        if (localStorage.getItem('eventos')) {
            var retorno;
            retorno = JSON.parse(localStorage.getItem('eventos'));
            this.preencheEventosFromLocalStorage(retorno);
        }
        else {
            var eventos = [
                new Evento_1.Evento(1, 'XIX Congresso de Computação e Sistemas de Informação', 'ENCOINFO'),
                new Evento_1.Evento(2, 'XIII Simpósio Brasileiro de Sistemas de Informação', 'SBSI'),
                new Evento_1.Evento(3, 'XXXVII Congresso da Sociedade Brasileira de Computação', 'CSBC')
            ];
            localStorage.setItem('eventos', JSON.stringify(eventos));
        }
    }
    EventoManagerComponent.prototype.preencheEventosFromLocalStorage = function (retorno) {
        var array;
        for (var _i = 0, retorno_1 = retorno; _i < retorno_1.length; _i++) {
            var o = retorno_1[_i];
            array = Object.keys(o);
            var objEvento = new Evento_1.Evento(0, "", "");
            for (var _a = 0, array_1 = array; _a < array_1.length; _a++) {
                var key = array_1[_a];
                switch (key) {
                    case "id": {
                        objEvento.id = o[key];
                        break;
                    }
                    case "nome": {
                        objEvento.nome = o[key];
                        break;
                    }
                    case "sigla": {
                        objEvento.sigla = o[key];
                        break;
                    }
                    case "inicio": {
                        objEvento.inicio = o[key];
                        break;
                    }
                    case "termino": {
                        objEvento.termino = o[key];
                        break;
                    }
                    case "url": {
                        objEvento.url = o[key];
                        break;
                    }
                    case "cidade": {
                        objEvento.cidade = o[key];
                        break;
                    }
                    case "estado": {
                        objEvento.estado = o[key];
                        break;
                    }
                    case "local": {
                        objEvento.local = o[key];
                        break;
                    }
                }
            }
            console.log(objEvento);
            this.eventos.push(objEvento);
            console.log(this.eventos);
        }
    };
    EventoManagerComponent.prototype.preencherNovoEvento = function () {
        this.evento = new Evento_1.Evento(0, "", "");
    };
    EventoManagerComponent.prototype.mostrarDetalhes = function (evento) {
        this.eventoSelecionado = evento;
    };
    EventoManagerComponent.prototype.deletar = function (evento) {
        var posicao;
        posicao = this.eventos.indexOf(evento);
        this.eventos.splice(posicao, 1);
        localStorage.setItem('eventos', JSON.stringify(this.eventos));
    };
    EventoManagerComponent.prototype.editar = function (evento) {
        this.evento = evento;
        this.editando = true;
    };
    EventoManagerComponent.prototype.onSubmit = function () {
        console.log(this.evento);
        if (!this.editando) {
            console.log("teste");
            this.eventos.push(this.evento);
            localStorage.setItem('eventos', JSON.stringify(this.eventos));
            this.enviado = true;
        }
        else {
            var pos;
            pos = this.eventos.indexOf(this.evento);
            this.eventos[pos] = this.evento;
            localStorage.setItem('eventos', JSON.stringify(this.eventos));
            this.editando = false;
            this.editado = true;
        }
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