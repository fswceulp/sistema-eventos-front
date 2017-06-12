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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var EventosService = (function () {
    function EventosService(http) {
        this.http = http;
        this.eventoUrl = "http://localhost:3000/eventos";
        this.headers = new http_1.Headers({ 'Content-Type': 'applications/json' });
    }
    EventosService.prototype.getEventos = function () {
        return this.http.get(this.eventoUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EventosService.prototype.handleError = function (error) {
        console.log("não foi possível obter a lista de eventos", error);
        return Promise.reject(error.message || error);
    };
    return EventosService;
}());
EventosService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EventosService);
exports.EventosService = EventosService;
//# sourceMappingURL=eventos.service.js.map