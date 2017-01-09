import {Tabuleiro} from "./tabuleiro";
import {Player} from "./player";

export class Game{
    public tabuleiros : Tabuleiro[] = [];
    public players: Player[] = [];
    public owner: number=0;
    public gameId: number=0;
    public status: string;

    public constructor (gameId: number, owner: number, players: Player[], tabuleiros: Tabuleiro[], status: string){

        this.gameId = gameId;
        this.owner = owner;
        this.players = players;
        this.tabuleiros = tabuleiros;
        this.status = status;
    }



    public isFUll() {
        if (this.players.length == 4) {
            return true;
        }
    }
}

