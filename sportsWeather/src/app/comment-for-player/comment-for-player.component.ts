import { Component, OnInit } from '@angular/core';
import {CommentService} from '../services/comment.service';
import {CommentPlayer} from '../models/commentPlayer';

@Component({
  selector: 'app-comment-for-player',
  templateUrl: './comment-for-player.component.html',
  styleUrls: ['./comment-for-player.component.css']
})
export class CommentForPlayerComponent implements OnInit {

  comments: CommentPlayer[];
  firstName: String;
  lastName: String;
  //
  constructor(private commentService: CommentService) { }
  //
  ngOnInit() {
    this.commentService.getPlayerComments()
       .subscribe( data => {
         console.log(data);
         this.comments = data;
       });
  }

   savePlayersName(firstName: String, lastName: String) {
     this.firstName = firstName;
     this.lastName = lastName;
   }

}
