import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../models/player';
import {Gamelog} from '../models/gamelog';
import {PlayerPageService} from '../services/player-page.service';
import {CommentService} from '../services/comment.service';
import {CommentPlayer} from '../models/commentPlayer';
import {WatchlistService} from '../services/watchlist.service';
import {AppComponent} from '../app.component';



@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit {

  players: Player[];
  player: Player = new Player();
  gamelogs: Gamelog[];
  comment: CommentPlayer = new CommentPlayer();
  reply: CommentPlayer = new CommentPlayer();
  replies: any;
  comments: CommentPlayer[];
  receiverDisplay: boolean;
  quarterbackDisplay: boolean;
  runningbackDisplay: boolean;
  buttonElement: HTMLElement;
  likebuttonElement: HTMLElement;
  commentBox: HTMLElement;
  giantDIV: HTMLElement;
  replyInputAuthor: HTMLElement;
  replyInput: HTMLElement;
  athleteReply: String;

  constructor(private playerService: PlayerPageService, private commentService: CommentService,
              private watchListService: WatchlistService, private appComponent: AppComponent) {
  }

  ngOnInit() {

    this.receiverDisplay = false;
    this.quarterbackDisplay = false;
    this.runningbackDisplay = false;

    if (this.appComponent.getCurrentUserType() === 'Team Manager') {
      this.buttonElement = document.getElementById('addWatchlistButton');
      this.buttonElement.setAttribute('style', 'visibility: visible');
    }

    if (this.appComponent.getCurrentUserType() === 'Anonymous') {
      this.likebuttonElement = document.getElementById('likePlayerButton');
      this.likebuttonElement.setAttribute('style', 'visibility: hidden');
    }

    if (this.appComponent.getCurrentUserType() === 'Athlete' || this.appComponent.getCurrentUserType() === 'Anonymous'
      || this.appComponent.getCurrentUserType() === 'Basic User') {
      this.commentBox = document.getElementById('commentBox');
      this.commentBox.setAttribute('style', 'visibility: hidden');
    }

    if (this.appComponent.getCurrentUserType() === 'Anonymous') {
      this.giantDIV = document.getElementById('giantDIV');
      this.giantDIV.setAttribute('style', 'visibility: hidden');
    }

    if (this.appComponent.getCurrentUserType() === 'Athlete') {
      this.replyInput = document.getElementById('replyInput');
      this.replyInput.setAttribute('style', 'visibility: visible');
      // this.replyInputAuthor = document.getElementById('input-reply-author');
      // this.replyInputAuthor.setAttribute('style', 'visibility: visible');
    }

    this.playerService.getPlayer()
      .subscribe(data => {
        this.player = data;
        if (this.player.type === 'WR' || this.player.type === 'TE') {
          this.receiverDisplay = true;
        }
        if (this.player.type === 'QB') {
          this.quarterbackDisplay = true;
        }
        if (this.player.type === 'RB') {
          this.runningbackDisplay = true;
          console.log(this.player.firstName);
        }
      });

    this.playerService.getPlayerComments()
      .subscribe(data => {
        console.log(data);
        this.comments = data;
      });
    this.playerService.getPlayerGameLogs()
      .subscribe(data => {
        this.gamelogs = data;
      });
    this.commentService.setPlayerName(this.player.firstName, this.player.lastName);
}

  createPlayerComment() {
    this.comment.playerFirstName = this.player.firstName;
    this.comment.playerLastName = this.player.lastName;
    this.commentService.createComment(this.comment)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  addOne(currentComment: CommentPlayer) {
    console.log(currentComment.content);
    this.commentService.updateCommentLikes(currentComment)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  likeResponse() {
    alert('You liked a comment! Search for this player again from the Homepage to see the updated like amount');
  }

  clickedFunctions(currentComment: CommentPlayer) {
    this.addOne(currentComment);
    this.likeResponse();
  }

  createReply(originalContent: String) {
    this.reply.playerFirstName = this.player.firstName;
    this.reply.playerLastName = this.player.lastName;
    this.reply.originalContent = originalContent;
    this.reply.username = this.athleteReply;
    console.log(this.reply.originalContent);
    console.log(this.comment.content);
    if (this.reply.content !== undefined) {
      this.commentService.createReply(this.reply, this.reply.playerFirstName, this.reply.playerLastName)
        .subscribe(data => console.log(data), error => console.log(error));
  }
  }


  fetchReplies(content: CommentPlayer) {
    this.commentService.getReplies(content, this.player.firstName, this.player.lastName)
      .subscribe(data => {
        console.log(data);
        this.replies = data;
      });
    console.log(content);
  }

  addToWatchList(firstName: String, lastName: String) {
    alert('You have tried to add ' + firstName + ' ' + lastName
      + ' to your watchlist. If another user has claimed ' + firstName + ' '
      + lastName + ' then you may not be able to add this athlete to your watchlist!');
    console.log(this.appComponent.currentUser);
      this.watchListService.addPlayerToWatchList(firstName, lastName, this.appComponent.currentUser)
        .subscribe(data => console.log(data), error => console.log(error));
  }

  addLikeToPlayer(firstName: String, lastName: String) {
    alert('Liked player: ' + firstName + ' ' + lastName);
    this.playerService.addPlayerLike(firstName, lastName, this.player)
        .subscribe(data => console.log(data), error => console.log(error));
  }



}

