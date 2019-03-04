import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommentPlayer} from '../models/commentPlayer';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  firstName: String;
  lastName: String;
  params: HttpParams;

  private baseUrl = '/api/comment';

  constructor(private http: HttpClient) { }

  public getPlayerComments() {
    return this.http.get<CommentPlayer[]>(this.baseUrl + '/player/find/' + this.firstName + '/' + this.lastName + '/');
  }

  public createComment(comment: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl + '/player/find/' + this.firstName + '/' + this.lastName + '/create'}`, comment);
  }

  public setPlayerName(firstName: String, lastName: String) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public updateCommentLikes(comment: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl + '/player/update/' + this.firstName + '/' + this.lastName}`, comment);
  }

  public createReply(comment: Object, replyFirst: String, replyLast: String): Observable<Object> {
    return this.http.post(`${this.baseUrl + '/player/find/' + replyFirst + '/' + replyLast + '/reply'}`, comment);
  }

  public getReplies(comment: Object, firstName: String, lastName: String): Observable<Object> {
    return this.http.post<CommentPlayer[]>(`${this.baseUrl + '/player/find/'
    + firstName + '/' + lastName + '/find-replies'}`, comment);
  }

  public getCommentsByUser(user: String) {
    return this.http.get<CommentPlayer[]>(this.baseUrl + '/find/' + user + '/');
  }

  public deleteComment(comment: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl + '/delete'}`, comment);
  }

  public updateCommentContent(comment: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl + '/update/'}`, comment);
  }

  public getComments() {
    return this.http.get<CommentPlayer[]>(this.baseUrl);
  }

}
