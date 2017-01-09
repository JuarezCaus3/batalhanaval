import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private apiUrl = 'http://localhost:7777/api/v1';  // URL to web api
  constructor(private http: Http) {}

  getPlayers(): Promise<any[]> {
    return this.http.get('${this.apiUrl}/players')
               .toPromise()
               .then(response => response.json().data as any[])
               .catch(this.handleError);
  }

  getPlayer(id: number): Promise<any> {
    const url = '${this.apiUrl}/players/${id}';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as any)
      .catch(this.handleError);
  }

  deletePlayer(id: number): Promise<void> {
    const url = '${this.apiUrl}/players/${id}';
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  createPlayer(player: any): Promise<any> {

    console.log("playerAngular: " + player + " user: " + player.username + " pass: " + player.password);

    return this.http
      .post(`http://localhost:7777/api/v1/signup`, JSON.stringify(player), {headers: this.headers})
      .toPromise()
      .then(res =>
        res.json())
      .catch(this.handleError);
  }

  updatePlayer(player: any): Promise<any> {
    const url = '${this.apiUrl}/players/${player.id}';
    return this.http
      .put(url, JSON.stringify(player), {headers: this.headers})
      .toPromise()
      .then(() => player)
      .catch(this.handleError);
  }

  login(user: any): Promise<string>{
    return this.http
    .post('http://localhost:7777/api/v1/login', user)
    .toPromise()
    .then(response => response.json().data)
    .catch(this.handleError);
  }

   getGame(gameId: number): Promise<any>{
    return this.http
    .get(`http://localhost:7777/api/v1/games/${gameId}`)
    .toPromise()
    .then(response => response.json().data as any )
    .catch(this.handleError);
  }

  getGames(): Promise<any[]>{
    return this.http
    .get('http://localhost:7777/api/v1/games')
    .toPromise()
    .then( response =>response.json().data as any[])
    .catch(this.handleError);    
  }

  createGame(game: any): Promise<any> {

    console.log("playerAngular: " + game + " user: " + game.gameName + " pass: " + game.gameId);

    return this.http
      .post(`http://localhost:7777/api/v1/games`, JSON.stringify(game), {headers: this.headers})
      .toPromise()
      .then(res =>
        res.json())
      .catch(this.handleError);
  }

  deleteGame(gameId: number): void{
    this.http
    .delete(`http://localhost:7777/api/v1/games/${gameId}`)
    .catch(this.handleError);
  }

  updateGame(gameId:number, game: any): void{
    this.http
    .put(`http://localhost:7777/api/v1/games/${gameId}`, JSON.stringify(game), {headers: this.headers })
    .catch(this.handleError);
  }

  getTop10(): Promise<any[]>{
    return this.http
    .get('http://localhost:7777/api/v1/top10')
    .toPromise()
    .then( response => response.json().data as any[])
    .catch(this.handleError);
  }



  private extractData(res: Response) {
    let body = res.json();

    console.log(" Extract body: " + JSON.stringify(body.data));
    return body.data || { };
  }

private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure
  let errMsg: string;
  let b: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    b = body;
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg + "isto e p bpdy: " + b);
  return Promise.reject(errMsg);
}

}


