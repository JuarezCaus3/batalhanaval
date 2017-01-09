import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { BoardComponent } from './board.component';  
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router'; 


import { NotificationModule } from './notifications/notifications.module';
import { LobbyComponent } from './lobby.component';
import { GameComponent } from './game.component';
import { ChatComponent } from './chat.component';

import { WebSocketService } from './notifications/websocket.service';
import { HttpService } from './notifications/http.service';

const appRoutes: Routes = [
  { path: 'lobby', component: LobbyComponent },
  { path: '',   redirectTo: '/lobby', pathMatch: 'full' },
  {path: 'game', component: GameComponent},
  {path: 'board', component: BoardComponent}
];

@NgModule({
  imports:      [ BrowserModule, NotificationModule, FormsModule, 
  HttpModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, ChatComponent, BoardComponent, GameComponent, LobbyComponent, ],
  providers:    [ WebSocketService, HttpService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
