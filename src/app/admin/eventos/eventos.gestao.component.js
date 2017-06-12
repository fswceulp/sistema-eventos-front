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
require("rxjs/add/operator/switchMap");
var evento_1 = require("./evento");
var evento_service_1 = require("./evento.service");
var estado_service_1 = require("../../estado.service");
//extensão da class Obsevable
require("rxjs/add/observable/of");
//operadores Observable
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var EventosGestaoComponent = (function () {
    function EventosGestaoComponent(eventoService, estadoService, router, route) {
        this.eventoService = eventoService;
        this.estadoService = estadoService;
        this.router = router;
        this.route = route;
        this.evento = new evento_1.Evento();
        this.error = false;
        this.salvo = false;
        this.title = "Adicionar Evento";
    }
    //Inicializa métodos
    EventosGestaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEstados();
        //verifica se tem o id no parametro, se tiver adicionar o metódo getEvento(), reconhecendo que é um update
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.getEvento();
            }
        });
    };
    //Pega Evento de acordo com o ID passado na rota
    EventosGestaoComponent.prototype.getEvento = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.eventoService.getEvento(+params['id']); })
            .subscribe(function (evento) { return _this.evento = evento; });
    };
    //Pega Estados
    EventosGestaoComponent.prototype.getEstados = function () {
        var _this = this;
        this.estadoService.getEstados()
            .subscribe(function (estados) { return _this.estados = estados; });
    };
    //Pega Cidades Filtradas a partir do ID do Estado 
    EventosGestaoComponent.prototype.getCidades = function (estadoId) {
        var _this = this;
        this.estadoService.getCidades(estadoId)
            .subscribe(function (cidades) { return _this.cidades = cidades; });
    };
    //Salva dados do Formulário (Obs. cria um novo registro)
    EventosGestaoComponent.prototype.salvar = function () {
        var _this = this;
        this.eventoService.save(this.evento)
            .subscribe(function (evento) {
            _this.evento = evento;
            _this.error = false;
            _this.salvo = true;
            _this.reset();
            _this.nomeEvento = evento.nome;
        }, function (error) {
            _this.errorMessage = error;
            _this.error = true;
            _this.salvo = false;
        });
    };
    //Salva dados do Formulário (Obs. atualiza um registro registro)
    EventosGestaoComponent.prototype.atualizar = function () {
        var _this = this;
        this.eventoService.update(this.evento)
            .subscribe(function (evento) {
            _this.evento = evento;
            _this.error = false;
            _this.salvo = true;
            return;
        }, function (error) {
            _this.errorMessage = error;
            _this.error = true;
            _this.salvo = false;
        });
    };
    //Limpa os campos do fomulário após criar um novo registro com sucesso.
    EventosGestaoComponent.prototype.reset = function () {
        this.evento.id = null;
        this.evento.nome = null;
        this.evento.descricao = null;
        this.evento.sigla = null;
        this.evento.estadoId = null;
        this.evento.cidadeId = null;
        this.evento.inicio = null;
        this.evento.termino = null;
        this.evento.palavras_chave = null;
    };
    EventosGestaoComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/eventos', this.evento.id]);
    };
    return EventosGestaoComponent;
}());
EventosGestaoComponent = __decorate([
    core_1.Component({
        templateUrl: './eventos.gestao.component.html',
        styleUrls: ['./eventos.component.css'],
        providers: [evento_service_1.EventoService, estado_service_1.EstadoService]
    }),
    __metadata("design:paramtypes", [evento_service_1.EventoService,
        estado_service_1.EstadoService,
        router_1.Router,
        router_1.ActivatedRoute])
], EventosGestaoComponent);
exports.EventosGestaoComponent = EventosGestaoComponent;
//# sourceMappingURL=eventos.gestao.component.js.map