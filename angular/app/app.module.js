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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var board_component_1 = require('./board.component');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var notifications_module_1 = require('./notifications/notifications.module');
var lobby_component_1 = require('./lobby.component');
var game_component_1 = require('./game.component');
var chat_component_1 = require('./chat.component');
var websocket_service_1 = require('./notifications/websocket.service');
var http_service_1 = require('./notifications/http.service');
var appRoutes = [
    { path: 'lobby', component: lobby_component_1.LobbyComponent },
    { path: '', redirectTo: '/lobby', pathMatch: 'full' },
    { path: 'game', component: game_component_1.GameComponent },
    { path: 'board', component: board_component_1.BoardComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, notifications_module_1.NotificationModule, forms_1.FormsModule,
                http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
            declarations: [app_component_1.AppComponent, chat_component_1.ChatComponent, board_component_1.BoardComponent, game_component_1.GameComponent, lobby_component_1.LobbyComponent,],
            providers: [websocket_service_1.WebSocketService, http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map