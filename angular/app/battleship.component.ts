import { Component, OnInit } from '@angular/core';
import { Ship } from './battleship';


import {WebSocketService } from './notifications/websocket.service';

@Component({
    moduleId: module.id,
    selector: 'ship'
})
export class BattleshipComponent implements OnInit {
    type: number;

    constructor(private websocketService: WebSocketService){
    }

    ngOnInit() {
    	
        //this.websocketService.getChatMessages().subscribe((m:any) => this.chatChannel.push(<string>m));
        //this.websocketService.getPlayersMessages().subscribe((m:any) => this.playersChannel.push(<string>m));
    }

}
