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
var router_1 = require("@angular/router");
//extensão da class Obsevable
require("rxjs/add/observable/of");
//operadores Observable
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var evento_1 = require("./evento");
var evento_service_1 = require("./evento.service");
var EventosComponent = (function () {
    function EventosComponent(eventoService, router) {
        this.eventoService = eventoService;
        this.router = router;
        this.title = 'Eventos Cadastrados';
        this.deletado = false;
        this.error = false;
        this.evento = new evento_1.Evento();
    }
    EventosComponent.prototype.ngOnInit = function () {
        this.getEventos();
    };
    EventosComponent.prototype.getEventos = function () {
        var _this = this;
        this.eventoService.getEventos()
            .subscribe(function (eventos) { return _this.eventos = eventos; });
    };
    EventosComponent.prototype.deletar = function (evento) {
        var _this = this;
        this.eventoService.delete(evento)
            .subscribe(function (eventos) {
            _this.evento = eventos;
            _this.deletado = true;
            _this.error = false;
            _this.atualizar();
        }, function (error) {
            _this.deletado = false;
            _this.error = true;
        });
    };
    EventosComponent.prototype.atualizar = function () {
        this.getEventos();
    };
    return EventosComponent;
}());
EventosComponent = __decorate([
    core_1.Component({
        selector: 'my-eventos',
        templateUrl: './eventos.component.html',
        styleUrls: ['./eventos.component.css'],
        providers: [evento_service_1.EventoService]
    }),
    __metadata("design:paramtypes", [evento_service_1.EventoService,
        router_1.Router])
], EventosComponent);
exports.EventosComponent = EventosComponent;
//# sourceMappingURL=eventos.component.js.map