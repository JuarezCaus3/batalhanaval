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
var http_service_1 = require('./notifications/http.service');
var player_1 = require("./player");
var game_1 = require("./game");
var LobbyComponent = (function () {
    function LobbyComponent(http) {
        this.http = http;
        this.games = [];
        this.jogos = [];
        this.players1 = [];
        this.players2 = [];
    }
    LobbyComponent.prototype.ngOnInit = function () {
        var player1 = new player_1.Player(123, "qwerty");
        this.players1[0] = player1;
        this.players1[1] = new player_1.Player(223, "qwerty");
        this.players1[2] = new player_1.Player(323, "qwerty");
        this.players2[0] = player1;
        this.players2[1] = new player_1.Player(623, "qwerty");
        this.players2[2] = new player_1.Player(823, "qwerty");
        this.players2[3] = new player_1.Player(223, "qwerty");
        //games[0] = new Game(1, 123, , null, "running");
        this.games[0] = new game_1.Game(2, 223, this.players1, null, "running");
        this.games[1] = new game_1.Game(3, 521, this.players2, null, "running");
    };
    LobbyComponent.prototype.createGame = function () {
        var id = (this.jogos.length + 1);
        var jogo = {
            gameId: id,
            gameName: this.gameName
        };
        for (var i = 0; i < this.jogos.length; i++) {
            if (this.jogos[i].gameId == jogo.gameId) {
                var err = "erro: Jogo já existe" + " id: " +
                    this.jogos[i].gameId + " nome: " + this.jogos[i].gameName;
                console.log(err);
                return alert(err);
            }
        }
        this.http.createGame(jogo);
        this.jogos.push(jogo);
    };
    LobbyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lobby',
            templateUrl: 'lobby.component.html'
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], LobbyComponent);
    return LobbyComponent;
}());
exports.LobbyComponent = LobbyComponent;
//# sourceMappingURL=lobby.component.js.map