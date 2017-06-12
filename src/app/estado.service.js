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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var EstadoService = (function () {
    function EstadoService(http) {
        this.http = http;
        this.estados = [];
        this.estadosUrl = 'http://localhost:3000/estados/';
    }
    EstadoService.prototype.getEstados = function () {
        return this.http.get(this.estadosUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EstadoService.prototype.getCidades = function (estadoId) {
        return this.http.get(this.estadosUrl + estadoId + '/' + 'cidades')
            .map(this.extractData)
            .catch(this.handleError);
    };
    EstadoService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    EstadoService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return EstadoService;
}());
EstadoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EstadoService);
exports.EstadoService = EstadoService;
//# sourceMappingURL=estado.service.js.map