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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var Evento_1 = require("./Evento");
var EventoManagerService = (function () {
    function EventoManagerService(http) {
        this.http = http;
    }
    EventoManagerService.prototype.getEventosFromFile = function () {
        return this.http.get('src/eventos-file.json')
            .map(function (resposta) { return resposta.json(); });
    };
    EventoManagerService.prototype.preencheEventosFromFile = function (retorno) {
        var array;
        var eventos = [];
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
            eventos.push(objEvento);
        }
        return eventos;
    };
    return EventoManagerService;
}());
EventoManagerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EventoManagerService);
exports.EventoManagerService = EventoManagerService;
//# sourceMappingURL=evento-manager.service.js.map