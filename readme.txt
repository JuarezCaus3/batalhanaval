Exemplo com 2 servidores distintos, um para o node e outro para servir o angular (em dois portos distintos).

O objetivo é permitir o desenvolvimento do servidor node e do angular com ferramentas que reiniciam os serviços automaticamente sempre que o código fonte for alterado.

Instruções para testar o projeto:

----- ----- -----  Globais ----- ----- -----  

1) Arrancar o servidor de MongoDB
 
2) Instala o módulo nodemon (globalmente) para refresh automático do servidor ver: https://nodemon.io

-- Como ?
Executar (na linha de comandos):
npm install -g nodemon



----- ----- -----  Na pasta do node ----- ----- -----  

1) Editar o ficheiro app.js para utilizar a BD MongoDB (com os games e players) criada anteriormente. 

const url = 'mongodb://localhost:27017/NOME_DA_BD';

2) Executar (na linha de comandos):

npm install


3) Executar (na linha de comandos):

npm start

(este comando arranca o servidor node usando nodemon, que inclui com refresh automático)



----- ----- -----  Na pasta do angular ----- ----- -----  

1) Verificar o URL do servidor dos WebSockets (= URL do servidor do node)

  -- Como? 
  No ficheiro "angular/app/notifications/websockets.service.ts", confirmar a linha:

  this.socket = io(`http://localhost:7777`);


2) Executar (na linha de comandos):

npm install


3) Executar (na linha de comandos):

npm start


