import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';
import { User } from '../models/user';
import {RegisterService} from '../services/register.service';
import {CommentPlayer} from '../models/commentPlayer';
import {CommentService} from '../services/comment.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  users: User[];
  user: User = new User();
  submitted = false;
  comments: CommentPlayer[];
  newCommentContent: String;
  deletedComment: CommentPlayer = new CommentPlayer();

  constructor(private adminService: AdminService, private registerService: RegisterService,
              private commentService: CommentService) { }

  ngOnInit() {
    this.adminService.getUsers()
      .subscribe( data => {
        this.users = data;
      });


    this.commentService.getComments()
      .subscribe( data => {
        this.comments = data;
      });
  }

  deleteComment(comment: CommentPlayer) {
    alert('Comment has been deleted.');
    console.log(comment);
    this.deletedComment.content = comment.content;
    this.deletedComment.likes = comment.likes;
    this.commentService.deleteComment(this.deletedComment).subscribe( data => {
      this.comments = this.comments.filter(u => u !== comment);
    });
  }

  updateThisComment(comment: CommentPlayer) {
    if (this.newCommentContent !== undefined) {
      comment.content = this.newCommentContent;
      this.commentService.updateCommentContent(comment)
        .subscribe(data => console.log(data), error => console.log(error));
    }
  }

  deleteUser(user: User): void {
    this.adminService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      });
  }

  updateUser() {
    console.log(this.user);
    this.adminService.updateUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  save() {
    console.log(this.user);
    this.registerService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    alert('Registration Successful');
  }

}
