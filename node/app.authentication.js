"use strict";
var app_players_1 = require("./app.players");
var sha1 = require('sha1');
var listUsers = [];
var Authentication = (function () {
    function Authentication() {
        var _this = this;
        this.login = function (request, response, next) {
            var player = request.user;
            response.json(player);
            return next();
        };
        this.logout = function (request, response, next) {
            request.logOut();
            response.json({ msg: 'Logout' });
            return next();
        };
        this.signup = function (request, response, next) {
            new app_players_1.Player().createPlayer(request, response, next);
        };
        this.init = function (server, settings) {
            _this.playerApp = new app_players_1.Player();
            server.post(settings.prefix + 'signup', _this.signup);
            server.post(settings.prefix + 'login', settings.security.passport.authenticate('local', { 'session': false }), _this.login);
            server.post(settings.prefix + 'logout', settings.security.authorize, _this.logout);
            console.log("Authentication routes registered");
        };
    }
    return Authentication;
}());
exports.Authentication = Authentication;
