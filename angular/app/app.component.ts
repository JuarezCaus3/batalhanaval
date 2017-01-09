import { Component } from '@angular/core';
import { HttpService } from './notifications/http.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent { 

username: string;
password: string;
logName: string;
logPass: string;
token: any;

    constructor(private httpService: HttpService) {}
    send(): void {



    	var player = {
    		username: this.username,
    		password: this.password
    	};

    	console.log("app player" + player + " user: " + player.username + " pass: " + player.password);

    	this.httpService.createPlayer(player);
    }


    login(): void {

        var player = {
            username: this.logName,
            password: this.logPass
        };

        this.token = this.httpService.login(player);
        console.log("tok: " + JSON.stringify(this.token) + " sera: " + this.token.username);
    }

}
