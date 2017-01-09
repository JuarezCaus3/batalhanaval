import { Component, OnInit } from '@angular/core';

import {WebSocketService } from './notifications/websocket.service';
import {HttpService } from './notifications/http.service';
import {Player} from "./player";
import {Game} from "./game";
import {Tabuleiro} from "./tabuleiro";


@Component({
    moduleId: module.id,
    selector: 'lobby',
    templateUrl: 'lobby.component.html'
})
export class LobbyComponent implements OnInit {

    game: Game;
    games: Game[] = [];
    jogos: any[] = [];
    players1: Player[] = [];
    players2: Player[] = [];
    gameId: number;
    gameName: string;

    constructor(private http: HttpService){
    }

    ngOnInit() {

        var player1 = new Player(123, "qwerty");
    	this.players1[0] = player1;
    	this.players1[1] = new Player(223, "qwerty");
    	this.players1[2] = new Player(323, "qwerty");
    	this.players2[0] = player1;
    	this.players2[1] = new Player(623, "qwerty");
    	this.players2[2] = new Player(823, "qwerty");
    	this.players2[3] = new Player(223, "qwerty");



       //games[0] = new Game(1, 123, , null, "running");
       this.games[0] = new Game(2, 223, this.players1, null, "running");
       this.games[1] = new Game(3, 521, this.players2, null, "running");
    }


    public createGame() {
            let id = (this.jogos.length+1);

        let jogo = {
            gameId: id,
            gameName: this.gameName
        };
        for (var i=0; i<this.jogos.length; i++) {
            if (this.jogos[i].gameId == jogo.gameId) {
                let err = "erro: Jogo já existe" + " id: " + 
                    this.jogos[i].gameId + " nome: " + this.jogos[i].gameName;
                console.log(err);
                return alert(err);
            }
        }

        this.http.createGame(jogo);

        this.jogos.push(jogo);
    }
}
