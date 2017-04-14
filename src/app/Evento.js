"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Evento = (function () {
    function Evento(id, nome, sigla, inicio, termino, url, cidade, estado, local) {
        this.id = id;
        this.nome = nome;
        this.sigla = sigla;
        if (inicio)
            this.inicio = inicio;
        if (termino)
            this.termino = termino;
        if (url)
            this.url = url;
        if (cidade)
            this.cidade = cidade;
        if (estado)
            this.estado = estado;
        if (local)
            this.local = local;
    }
    return Evento;
}());
exports.Evento = Evento;
//# sourceMappingURL=Evento.js.map