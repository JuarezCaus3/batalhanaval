"use strict";
var io = require('socket.io');
var WebSocketServer = (function () {
    function WebSocketServer() {
        var _this = this;
        this.boards = [];
        this.board = [];
        this.games = [];
        this.init = function (server) {
            _this.initBoard();
            _this.io = io.listen(server);
            _this.io.sockets.on('connection', function (client) {
                client.emit('players', Date.now() + ': Welcome to battleship');
                client.broadcast.emit('players', Date.now() + ': A new player has arrived');
                //	this.clientes.push((this.clientes.length+1));
                client.on('chat', function (data) { return _this.io.emit('chat', data); });
                client.on('game', function (game) { return _this.io.emit('their', game); });
                /*	// Arrecadar tabuleiros
                    client.on('boards', (tabs) =>
                        this.boards.push(tabs)
                    );
        
                    client.on('mine', (mine) => this.io.emit('their', this.board));
                    console.log("clis " + this.clientes);
                    console.log("c: " + this.boards.length);
        
                    client.emit('boards', this.boards); */
                // client.emit('board', this.board);
                client.on('clickElement', function (indexElement) {
                    _this.board[indexElement]++;
                    if (_this.board[indexElement] > 2) {
                        _this.board[indexElement] = 0;
                    }
                    // this.notifyAll('board', this.board);
                });
            });
        };
        this.notifyAll = function (channel, message) {
            _this.io.sockets.emit(channel, message);
        };
    }
    WebSocketServer.prototype.initBoard = function () {
        for (var i = 0; i < 100; i++) {
            this.board[i] = 0;
        }
        // this.boards.push(this.board);
    };
    return WebSocketServer;
}());
exports.WebSocketServer = WebSocketServer;
;
