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
var EventoService = (function () {
    function EventoService(http) {
        this.http = http;
        this.eventos = [];
        this.eventosUrl = 'http://localhost:3000/eventos';
    }
    EventoService.prototype.getEventos = function () {
        return this.http.get(this.eventosUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EventoService.prototype.getEvento = function (id) {
        var url = this.eventosUrl + "/" + id;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EventoService.prototype.save = function (evento) {
        var body = JSON.stringify(evento);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.eventosUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EventoService.prototype.update = function (evento) {
        var urlUpdate = this.eventosUrl + "/" + evento.id;
        var body = JSON.stringify(evento);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(urlUpdate, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EventoService.prototype.delete = function (evento) {
        var urlDetele = this.eventosUrl + "/" + evento.id;
        return this.http.delete(urlDetele)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EventoService.prototype.search = function (term) {
        return this.http
            .get(this.eventosUrl + ("?name=" + term))
            .map(function (response) { return response.json(); });
    };
    EventoService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    EventoService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return EventoService;
}());
EventoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EventoService);
exports.EventoService = EventoService;
//# sourceMappingURL=evento.service.js.map