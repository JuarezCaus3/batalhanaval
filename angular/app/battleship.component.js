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
var websocket_service_1 = require('./notifications/websocket.service');
var BattleshipComponent = (function () {
    function BattleshipComponent(websocketService) {
        this.websocketService = websocketService;
    }
    BattleshipComponent.prototype.ngOnInit = function () {
        //this.websocketService.getChatMessages().subscribe((m:any) => this.chatChannel.push(<string>m));
        //this.websocketService.getPlayersMessages().subscribe((m:any) => this.playersChannel.push(<string>m));
    };
    BattleshipComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ship'
        }), 
        __metadata('design:paramtypes', [websocket_service_1.WebSocketService])
    ], BattleshipComponent);
    return BattleshipComponent;
}());
exports.BattleshipComponent = BattleshipComponent;
//# sourceMappingURL=battleship.component.js.map