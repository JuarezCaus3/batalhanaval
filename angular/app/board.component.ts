import { Component, OnInit } from '@angular/core';

import {WebSocketService } from './notifications/websocket.service';
import {Tabuleiro} from "./tabuleiro";
import {TipoNavio, Orientacao, Navio} from "./navio";
import {TipoCelula, Celula} from "./celula";
import {Posicao} from "./posicao";


@Component({
    moduleId: module.id,
    selector: 'board',
    templateUrl: 'board.component.html'
})
export class BoardComponent implements OnInit {
    cells: Celula [] = [];
   // types: TipoNavio[] = [];
   navioClass: Navio;
   tabuleiro: Tabuleiro;
   character: string;
   coluna: number;
   tipoNavio: TipoNavio[] = [];
   orientacao: Orientacao;
   quadrado: string;
   testeTabs: Tabuleiro;
   player: string;

    constructor(private websocketService: WebSocketService){
    }

    ngOnInit() {

        // let celulas = tabuleiro.celulas;

        this.tabuleiro = new Tabuleiro();
        this.testeTabs = new Tabuleiro();

    	for (var i = 0; i < this.tabuleiro.celulas.length; i++) {

            this.cells[i] = new Celula(this.tabuleiro.celulas[i].posicao.linha, this.tabuleiro.celulas[i].posicao.coluna);
            this.tabuleiro.celulas[i] = this.cells[i];
           // console.log("celula: " + this.cells[i].toString());
    	}

		/*this.websocketService.getBoards().subscribe((m:any) => {
            console.log("recebi este tab: " + m);
            this.testeTabs = m;
        });*/

        let game = {
            player: this.player,
            board: this.tabuleiro
        }
		
		this.websocketService.sendGame(game);


        this.websocketService.getGame().subscribe((m:any) => {
            console.log("recebi este tab: " + m);
            this.testeTabs = m.board;
          //  console.log("este TAB: " + this.testeTabs.celulas[5].toString());
        });
	        
    }

    clickCelulaTiro(celula: Celula){
   
        this.websocketService.sendClickElementTiro(1);
        //this.tabuleiro.celulas[index].tiro = true; 
        //this.quadrado = "X";
        if (celula.tiro==true){
            //console.log("tiro nulo");   
            return;
        }else{
            celula.tiro=true;
            //console.log("tiro");   
            //player[i].tiros++;
        }
    }
        

    public checkTiro(celula: Celula) {
         if(celula.tipo == TipoCelula.Mar && celula.tiro == true){
            return "O";
        }else if(celula.tipo == TipoCelula.Navio && celula.tiro == true) {
            return "X";
        }else{
            return "";
        }
    }

    public getColor(celula: Celula){
    	if(celula.tipo == TipoCelula.Mar){
    		return 'lightblue';
    	}else if(celula.tipo == TipoCelula.Navio){
    		return 'white';
    	}
    	else{
    		return 'blue';
    	}
    }

    public getTiro(celula: Celula){
        if(celula.tipo == TipoCelula.Mar){
            return 'lightblue';
        }
    }

    public adicionaNavio(tipo: string, orientacao: string) {


        try{

            if (this.verificaQuantidadeNavios(tipo)) {
               this.tabuleiro.adicionaNavio(this.getTipoNavios(tipo), this.getOrientacao(orientacao), this.character, this.coluna);
            }

        }catch (e) {
            alert(e);      
        }
    }

    public getTipoNavios(tipo: string) {
        if (tipo == "Submarino") {
            return TipoNavio.Submarino;
        }
        if (tipo == "PortaAvioes") {
            return TipoNavio.PortaAvioes;
        }
        if (tipo == "Couracado") {
            return TipoNavio.Couracado;
        }
        if (tipo == "Cruzador") {
            return TipoNavio.Cruzador;
        }
        if (tipo == "ContraTorpedeiro") {
            return TipoNavio.ContraTorpedeiro;
        }
    }

    public getOrientacao(orientacao: string) {
        if (orientacao == "Normal") {
            return Orientacao.Normal;
        }
        if (orientacao == "Roda90") {
            return Orientacao.Roda90;
        }
        if (orientacao == "Roda180") {
            return Orientacao.Roda180;
        }
        if (orientacao == "Roda270") {
            return Orientacao.Roda270;
        }
    }

    public verificaQuantidadeNavios(navio: string) {

            var submarino : number=0;
            var cruzador : number=0;
            var portaAvioes : number=0;
            var contra : number=0;
            var couracado : number=0;


            var navios = this.tabuleiro.navios;

            for (var i=0; i < navios.length; i++) {
                if (navios[i].tipoNavio == TipoNavio.Submarino) {

                    submarino++;
                    console.log("subs: " + submarino);
                }
                if (navios[i].tipoNavio == TipoNavio.Cruzador) {
                    cruzador++;
                }
                if (navios[i].tipoNavio == TipoNavio.PortaAvioes) {
                    portaAvioes++;
                }
                if (navios[i].tipoNavio == TipoNavio.ContraTorpedeiro) {
                    contra++;
                }
                if (navios[i].tipoNavio == TipoNavio.Couracado) {
                    couracado++;
                }
            }

            if (this.getTipoNavios(navio) == TipoNavio.Submarino && submarino < 4) {
                return true;
            } 
            else if (this.getTipoNavios(navio) == TipoNavio.Cruzador && cruzador < 2) {
                return true;
            }
            else if (this.getTipoNavios(navio) == TipoNavio.PortaAvioes && portaAvioes < 1) {
                return true;
            }
            else if (this.getTipoNavios(navio) == TipoNavio.ContraTorpedeiro && contra < 3) {
                return true;
            }
            else if (this.getTipoNavios(navio) == TipoNavio.Couracado && couracado < 1) {
                return true;
            } else {
                alert("Maximo de navios deste tipo: " + navio);
                return false;
            }
    }
}
