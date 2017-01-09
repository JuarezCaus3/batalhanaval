"use strict";
var posicao_1 = require("./posicao");
var TipoCelula;
(function (TipoCelula) {
    TipoCelula[TipoCelula["Mar"] = 0] = "Mar";
    TipoCelula[TipoCelula["Navio"] = 1] = "Navio";
})(TipoCelula = exports.TipoCelula || (exports.TipoCelula = {}));
var Celula = (function () {
    function Celula(linha, coluna) {
        this.posicao = new posicao_1.Posicao(linha, coluna);
        this.tipo = TipoCelula.Mar;
        this.tiro = false;
        this.pertenceA = null;
    }
    Celula.prototype.sobreposicao = function (c) {
        return (c.posicao.linha == this.posicao.linha) && (c.posicao.coluna == this.posicao.coluna);
    };
    // Verifica se uma determinada celula existe num array
    Celula.existe = function (celula, arrayCelulas) {
        for (var i = 0; i < arrayCelulas.length; i++) {
            if (celula.sobreposicao(arrayCelulas[i])) {
                return true;
            }
        }
        return false;
    };
    Celula.prototype.toString = function () {
        if (this.pertenceA == null) {
            return "pos: " + this.posicao + " posLinha: " + this.posicao.linha + " posCol: " + this.posicao.coluna + " tipoCel: " + this.tipo + " tiro: " + this.tiro + " naivoA: " + "vazio";
        }
        else {
            return "pos: " + this.posicao + " posLinha: " + this.posicao.linha + " posCol: " + this.posicao.coluna + " tipoCel: " + this.tipo + " tiro: " + this.tiro + " naivoA: " + this.pertenceA.tipoNavio;
        }
    };
    return Celula;
}());
exports.Celula = Celula;
