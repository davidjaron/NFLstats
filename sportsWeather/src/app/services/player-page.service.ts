import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Player} from '../models/player';
import {Gamelog} from '../models/gamelog';
import {CommentPlayer} from '../models/commentPlayer';

@Injectable({
  providedIn: 'root'
})
export class PlayerPageService {

  firstName: String;
  lastName: String;
  keyword: String;

  private baseUrl = '/api/player';
  private otherBASE = '/api/comment/player/find/';

  constructor(private http: HttpClient) { }

  public getPlayer() {
    if(this.firstName.length > 0) {
      return this.http.get<Player>(this.baseUrl + '/find/' + this.firstName + '/' + this.lastName);
    } else {
      this.setNames(this.firstName, this.lastName);
      return this.http.get<Player>(this.baseUrl + '/find/' + this.firstName + '/' + this.lastName);
    }
  }

  public getPlayersByKeyword() {
    return this.http.get<Player[]>(this.baseUrl + '/find/' + this.keyword);
  }

  public getPlayerGameLogs() {
    return this.http.get<Gamelog[]>(this.baseUrl + '/log/' + this.firstName + '/' + this.lastName);
  }

  public getPlayerComments() {
    return this.http.get<CommentPlayer[]>(this.otherBASE + this.firstName + '/' + this.lastName + '/');
  }

  public setOneName(keyword: String) {
    this.keyword = keyword;
  }

  public setNames(firstName: String, lastName: String) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public addPlayerLike(firstName: String, lastName: String, player: Player) {
    return this.http.put(`${this.baseUrl + '/likes/update/' + firstName + '/' + lastName}`, player);
  }

}
