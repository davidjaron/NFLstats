import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../models/user';
import {CommentPlayer} from '../models/commentPlayer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = '/api/admin';

  constructor(private http: HttpClient) { }
  public createUser(user) {
    return this.http.post(this.baseUrl, user);
  }

  public getUsers() {
    return this.http.get<User[]>(this.baseUrl + '/find');
  }

  public deleteUser(user) {
    return this.http.delete(this.baseUrl + '/delete/' + user.id);
  }

  public updateUser(user) {
    return this.http.put(this.baseUrl + '/update/', user);
  }

  public getUser(username: String) {
    return this.http.get<User>(this.baseUrl + '/find/' + username);
  }
}

