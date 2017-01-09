"use strict";
var Game = (function () {
    function Game(gameId, owner, players, tabuleiros, status) {
        this.tabuleiros = [];
        this.players = [];
        this.owner = 0;
        this.gameId = 0;
        this.gameId = gameId;
        this.owner = owner;
        this.players = players;
        this.tabuleiros = tabuleiros;
        this.status = status;
    }
    Game.prototype.isFUll = function () {
        if (this.players.length == 4) {
            return true;
        }
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map