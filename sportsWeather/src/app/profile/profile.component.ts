import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {CommentPlayer} from '../models/commentPlayer';
import {CommentService} from '../services/comment.service';
import {User} from '../models/user';
import {AdminService} from '../services/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  commentsByUser: CommentPlayer[];
  user: User = new User();
  newUser: User = new User();
  nonBasicBox: HTMLElement;
  deletedComment: CommentPlayer = new CommentPlayer();
  newCommentContent: String;
  userz: User[];
  userComments: CommentPlayer[];
  userWeHaveComments: String;
  userReponse: HTMLElement;

  constructor(private appComponent: AppComponent, private commentService: CommentService,
              private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getUsers()
      .subscribe( data => {
        this.userz = data;
      });


    this.commentService.getCommentsByUser(this.appComponent.currentUser)
      .subscribe(data => {
        console.log(data);
        this.commentsByUser = data;
      });
    this.adminService.getUser(this.appComponent.currentUser)
      .subscribe(data => {
        console.log(data);
        this.user = data;
      });
    console.log(this.appComponent.getCurrentUserType());
    if (this.appComponent.getCurrentUserType() === 'Basic User') {
      this.nonBasicBox = document.getElementById('notBasicBox');
      this.nonBasicBox.setAttribute('style', 'visibility: hidden');
    }
    if (this.appComponent.getCurrentUserType() === 'Team Manager') {
      this.nonBasicBox = document.getElementById('watchlistBoxID');
      this.nonBasicBox.setAttribute('style', 'visibility: visible');
    }
  }

  getUsername() {
    return this.appComponent.currentUser;
  }

  deleteComment(comment: CommentPlayer) {
    alert('Comment has been deleted.');
    console.log(comment);
    this.deletedComment.content = comment.content;
    this.deletedComment.likes = comment.likes;
    this.commentService.deleteComment(this.deletedComment).subscribe( data => {
      this.commentsByUser = this.commentsByUser.filter(u => u !== comment);
    });
  }

  updateThisComment(comment: CommentPlayer) {
    comment.content = this.newCommentContent;
    this.commentService.updateCommentContent(comment)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  updateUser() {
    this.newUser.id = this.user.id;
    this.newUser.userType = this.user.userType;
    this.adminService.updateUser(this.newUser)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  retrieveComments(username: String) {
    this.userReponse = document.getElementById('otherUsers');
    this.userReponse.setAttribute('style', 'visibility: visible');
    this.userWeHaveComments = username;
    this.commentService.getCommentsByUser(username)
      .subscribe(data => {
        this.userComments = data;
      });
  }

}
