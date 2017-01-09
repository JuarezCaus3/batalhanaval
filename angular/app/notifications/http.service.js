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
var http_1 = require('@angular/http');
// Statics
require('rxjs/add/observable/throw');
// Operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.apiUrl = 'http://localhost:7777/api/v1'; // URL to web api
    }
    HttpService.prototype.getPlayers = function () {
        return this.http.get('${this.apiUrl}/players')
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HttpService.prototype.getPlayer = function (id) {
        var url = '${this.apiUrl}/players/${id}';
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HttpService.prototype.deletePlayer = function (id) {
        var url = '${this.apiUrl}/players/${id}';
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HttpService.prototype.createPlayer = function (player) {
        console.log("playerAngular: " + player + " user: " + player.username + " pass: " + player.password);
        return this.http
            .post("http://localhost:7777/api/v1/signup", JSON.stringify(player), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    HttpService.prototype.updatePlayer = function (player) {
        var url = '${this.apiUrl}/players/${player.id}';
        return this.http
            .put(url, JSON.stringify(player), { headers: this.headers })
            .toPromise()
            .then(function () { return player; })
            .catch(this.handleError);
    };
    HttpService.prototype.login = function (user) {
        return this.http
            .post('http://localhost:7777/api/v1/login', user)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HttpService.prototype.getGame = function (gameId) {
        return this.http
            .get("http://localhost:7777/api/v1/games/" + gameId)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HttpService.prototype.getGames = function () {
        return this.http
            .get('http://localhost:7777/api/v1/games')
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HttpService.prototype.createGame = function (game) {
        console.log("playerAngular: " + game + " user: " + game.gameName + " pass: " + game.gameId);
        return this.http
            .post("http://localhost:7777/api/v1/games", JSON.stringify(game), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    HttpService.prototype.deleteGame = function (gameId) {
        this.http
            .delete("http://localhost:7777/api/v1/games/" + gameId)
            .catch(this.handleError);
    };
    HttpService.prototype.updateGame = function (gameId, game) {
        this.http
            .put("http://localhost:7777/api/v1/games/" + gameId, JSON.stringify(game), { headers: this.headers })
            .catch(this.handleError);
    };
    HttpService.prototype.getTop10 = function () {
        return this.http
            .get('http://localhost:7777/api/v1/top10')
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HttpService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(" Extract body: " + JSON.stringify(body.data));
        return body.data || {};
    };
    HttpService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        var b;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            b = body;
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg + "isto e p bpdy: " + b);
        return Promise.reject(errMsg);
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map