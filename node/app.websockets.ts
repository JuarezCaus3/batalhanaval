const io = require('socket.io');

export class WebSocketServer {

    
    public boards: any[] = [];
    public io: any;
    public board: any[] = [];
    public games: any[] = [];

    public initBoard(){
        
        for(let i=0; i<100; i++) {
            this.board[i]=0;
        }
       // this.boards.push(this.board);
    }

    public init = (server: any) => {
        this.initBoard();
        this.io = io.listen(server);            
        this.io.sockets.on('connection', (client: any) => {
            client.emit('players', Date.now() + ': Welcome to battleship');
            client.broadcast.emit('players', Date.now() + ': A new player has arrived');
			
		//	this.clientes.push((this.clientes.length+1));
			
            client.on('chat', (data) => this.io.emit('chat', data));
			client.on('game', (game) =>  this.io.emit('their', game)
            );

		/*	// Arrecadar tabuleiros
			client.on('boards', (tabs) =>					
				this.boards.push(tabs)
			);

            client.on('mine', (mine) => this.io.emit('their', this.board));			
			console.log("clis " + this.clientes);
			console.log("c: " + this.boards.length);

            client.emit('boards', this.boards); */
           // client.emit('board', this.board);
            client.on('clickElement', (indexElement) => {
                this.board[indexElement]++;
                if (this.board[indexElement] > 2) {
                    this.board[indexElement] = 0;
                }
            // this.notifyAll('board', this.board);
            });
        });
    };
	
    public notifyAll = (channel: string, message: any) => {
        this.io.sockets.emit(channel, message);
    }; 
};
