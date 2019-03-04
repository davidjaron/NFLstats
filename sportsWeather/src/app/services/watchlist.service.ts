import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Player} from '../models/player';
import {Gamelog} from '../models/gamelog';
import {AppComponent} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  private baseUrl = '/api/';

  constructor(private http: HttpClient) { }

  getPlayers(username: String) {
    return this.http.get<Player[]>(this.baseUrl + 'find/watchlist/' + username);
  }

  addPlayerToWatchList(firstName: String, lastName: String, username: String) {
    return this.http.get<Player>(this.baseUrl + username + '/watchlist/add/player/find/' + firstName + '/' + lastName);
  }

  deletePlayerFromWatchList(firstName: String, lastName: String) {
    return this.http.get<Player>(this.baseUrl + 'p/watchlist/delete/' + firstName + '/' + lastName);
  }

}

// /api/{user}/watchlist/delete/{firstName}/{lastName}



