import { Component, OnInit } from '@angular/core';

import {WebSocketService } from './notifications/websocket.service';
import {Tabuleiro} from "./tabuleiro";
import {TipoNavio, Orientacao} from "./navio";
import {TipoCelula, Celula} from "./celula";
import {Player} from "./player";
import {Game} from "./game";


@Component({
    moduleId: module.id,
    selector: 'game',
    templateUrl: 'game.component.html'
})
export class GameComponent implements OnInit {
    tabuleiros: Tabuleiro [] = [];
    
    constructor(private websocketService: WebSocketService){
    }

    ngOnInit() {

		
       // this.tabuleiros = this.elementos;

    }
}
