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
var core_1 = require('@angular/core');
var websocket_service_1 = require('./notifications/websocket.service');
var tabuleiro_1 = require("./tabuleiro");
var navio_1 = require("./navio");
var celula_1 = require("./celula");
var BoardComponent = (function () {
    function BoardComponent(websocketService) {
        this.websocketService = websocketService;
        this.cells = [];
        this.tipoNavio = [];
    }
    BoardComponent.prototype.ngOnInit = function () {
        // let celulas = tabuleiro.celulas;
        var _this = this;
        this.tabuleiro = new tabuleiro_1.Tabuleiro();
        this.testeTabs = new tabuleiro_1.Tabuleiro();
        for (var i = 0; i < this.tabuleiro.celulas.length; i++) {
            this.cells[i] = new celula_1.Celula(this.tabuleiro.celulas[i].posicao.linha, this.tabuleiro.celulas[i].posicao.coluna);
            this.tabuleiro.celulas[i] = this.cells[i];
        }
        /*this.websocketService.getBoards().subscribe((m:any) => {
            console.log("recebi este tab: " + m);
            this.testeTabs = m;
        });*/
        var game = {
            player: this.player,
            board: this.tabuleiro
        };
        this.websocketService.sendGame(game);
        this.websocketService.getGame().subscribe(function (m) {
            console.log("recebi este tab: " + m);
            _this.testeTabs = m.board;
            //  console.log("este TAB: " + this.testeTabs.celulas[5].toString());
        });
    };
    BoardComponent.prototype.clickCelulaTiro = function (celula) {
        this.websocketService.sendClickElementTiro(1);
        //this.tabuleiro.celulas[index].tiro = true; 
        //this.quadrado = "X";
        if (celula.tiro == true) {
            //console.log("tiro nulo");   
            return;
        }
        else {
            celula.tiro = true;
        }
    };
    BoardComponent.prototype.checkTiro = function (celula) {
        if (celula.tipo == celula_1.TipoCelula.Mar && celula.tiro == true) {
            return "O";
        }
        else if (celula.tipo == celula_1.TipoCelula.Navio && celula.tiro == true) {
            return "X";
        }
        else {
            return "";
        }
    };
    BoardComponent.prototype.getColor = function (celula) {
        if (celula.tipo == celula_1.TipoCelula.Mar) {
            return 'lightblue';
        }
        else if (celula.tipo == celula_1.TipoCelula.Navio) {
            return 'white';
        }
        else {
            return 'blue';
        }
    };
    BoardComponent.prototype.getTiro = function (celula) {
        if (celula.tipo == celula_1.TipoCelula.Mar) {
            return 'lightblue';
        }
    };
    BoardComponent.prototype.adicionaNavio = function (tipo, orientacao) {
        try {
            if (this.verificaQuantidadeNavios(tipo)) {
                this.tabuleiro.adicionaNavio(this.getTipoNavios(tipo), this.getOrientacao(orientacao), this.character, this.coluna);
            }
        }
        catch (e) {
            alert(e);
        }
    };
    BoardComponent.prototype.getTipoNavios = function (tipo) {
        if (tipo == "Submarino") {
            return navio_1.TipoNavio.Submarino;
        }
        if (tipo == "PortaAvioes") {
            return navio_1.TipoNavio.PortaAvioes;
        }
        if (tipo == "Couracado") {
            return navio_1.TipoNavio.Couracado;
        }
        if (tipo == "Cruzador") {
            return navio_1.TipoNavio.Cruzador;
        }
        if (tipo == "ContraTorpedeiro") {
            return navio_1.TipoNavio.ContraTorpedeiro;
        }
    };
    BoardComponent.prototype.getOrientacao = function (orientacao) {
        if (orientacao == "Normal") {
            return navio_1.Orientacao.Normal;
        }
        if (orientacao == "Roda90") {
            return navio_1.Orientacao.Roda90;
        }
        if (orientacao == "Roda180") {
            return navio_1.Orientacao.Roda180;
        }
        if (orientacao == "Roda270") {
            return navio_1.Orientacao.Roda270;
        }
    };
    BoardComponent.prototype.verificaQuantidadeNavios = function (navio) {
        var submarino = 0;
        var cruzador = 0;
        var portaAvioes = 0;
        var contra = 0;
        var couracado = 0;
        var navios = this.tabuleiro.navios;
        for (var i = 0; i < navios.length; i++) {
            if (navios[i].tipoNavio == navio_1.TipoNavio.Submarino) {
                submarino++;
                console.log("subs: " + submarino);
            }
            if (navios[i].tipoNavio == navio_1.TipoNavio.Cruzador) {
                cruzador++;
            }
            if (navios[i].tipoNavio == navio_1.TipoNavio.PortaAvioes) {
                portaAvioes++;
            }
            if (navios[i].tipoNavio == navio_1.TipoNavio.ContraTorpedeiro) {
                contra++;
            }
            if (navios[i].tipoNavio == navio_1.TipoNavio.Couracado) {
                couracado++;
            }
        }
        if (this.getTipoNavios(navio) == navio_1.TipoNavio.Submarino && submarino < 4) {
            return true;
        }
        else if (this.getTipoNavios(navio) == navio_1.TipoNavio.Cruzador && cruzador < 2) {
            return true;
        }
        else if (this.getTipoNavios(navio) == navio_1.TipoNavio.PortaAvioes && portaAvioes < 1) {
            return true;
        }
        else if (this.getTipoNavios(navio) == navio_1.TipoNavio.ContraTorpedeiro && contra < 3) {
            return true;
        }
        else if (this.getTipoNavios(navio) == navio_1.TipoNavio.Couracado && couracado < 1) {
            return true;
        }
        else {
            alert("Maximo de navios deste tipo: " + navio);
            return false;
        }
    };
    BoardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'board',
            templateUrl: 'board.component.html'
        }), 
        __metadata('design:paramtypes', [websocket_service_1.WebSocketService])
    ], BoardComponent);
    return BoardComponent;
}());
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=board.component.js.map