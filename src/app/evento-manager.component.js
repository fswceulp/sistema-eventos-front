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
var http_1 = require("@angular/http");
var evento_manager_service_1 = require("./evento-manager.service");
var EventoManagerComponent = (function () {
    function EventoManagerComponent(eventoManagerService) {
        this.eventoManagerService = eventoManagerService;
        this.eventoSelecionado = null;
        this.enviado = false;
        this.editando = false;
        this.editado = false;
        this.deletado = false;
        this.eventos = [];
        this.eventosHome = [];
        this.contIds = this.eventos.length;
        this.evento = new Evento_1.Evento(this.contIds + 1, '', '');
        this.tela = "home";
    }
    EventoManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventoManagerService.getEventosFromFile()
            .subscribe(function (resposta) {
            _this.eventos = resposta;
            _this.atualizaEventosHome();
        }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Completed!'); });
    };
    EventoManagerComponent.prototype.atualizaContadorIds = function () {
        this.contIds = this.eventos.length;
    };
    EventoManagerComponent.prototype.atualizaEventosHome = function () {
        this.eventosHome = [];
        if (this.eventos.length >= 3) {
            for (var i in this.eventos) {
                if (parseInt(i) <= 2) {
                    this.eventosHome.push(this.eventos[i]);
                }
                else {
                    break;
                }
            }
        }
        else if (this.eventos.length > 0) {
            for (var i in this.eventos) {
                this.eventosHome.push(this.eventos[i]);
            }
        }
    };
    EventoManagerComponent.prototype.leituraArquivo = function () {
    };
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
            this.eventos.push(objEvento);
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
        this.deletado = true;
        if (this.eventos.length < 3) {
            this.atualizaEventosHome();
        }
    };
    EventoManagerComponent.prototype.editar = function (evento) {
        this.evento = evento;
        this.editando = true;
    };
    EventoManagerComponent.prototype.onSubmit = function () {
        console.log(this.evento);
        if (!this.editando) {
            this.eventos.push(this.evento);
            this.enviado = true;
        }
        else {
            var pos;
            pos = this.eventos.indexOf(this.evento);
            this.eventos[pos] = this.evento;
            this.editando = false;
            this.editado = true;
        }
        if (this.eventos.length <= 3) {
            this.atualizaEventosHome();
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
        templateUrl: './evento-manager.component.html',
        styleUrls: ['./evento-manager.component.css'],
        providers: [http_1.Http]
    }),
    __metadata("design:paramtypes", [evento_manager_service_1.EventoManagerService])
], EventoManagerComponent);
exports.EventoManagerComponent = EventoManagerComponent;
//# sourceMappingURL=evento-manager.component.js.map