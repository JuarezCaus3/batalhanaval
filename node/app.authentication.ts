import {HandlerSettings} from './handler.settings';
import {Player} from './app.players';
const sha1 = require('sha1');
var listUsers = [];

export class Authentication{

    playerApp: Player;
   
    public login = (request: any, response: any, next: any) => {
        let player = request.user;
        response.json(player);
        return next();
    }

    public logout = (request: any, response: any, next: any) => {
        request.logOut();
        response.json({msg: 'Logout'});
        return next();
    }  

    public signup = (request: any, response: any, next: any) => {

       new Player().createPlayer(request, response, next);
    }

    public init = (server: any, settings: HandlerSettings) => {
        this.playerApp = new Player();
        server.post(settings.prefix + 'signup', this.signup);
        server.post(settings.prefix + 'login', settings.security.passport.authenticate('local', {'session':false}), this.login);
        server.post(settings.prefix + 'logout', settings.security.authorize, this.logout);
        console.log("Authentication routes registered");
    }  
} 

