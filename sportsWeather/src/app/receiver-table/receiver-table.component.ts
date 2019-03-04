import { Component, OnInit } from '@angular/core';
import {Player} from '../models/player';
import {Gamelog} from '../models/gamelog';
import {Team} from '../models/team';
import {PlayerPageService} from '../services/player-page.service';

@Component({
  selector: 'app-receiver-table',
  templateUrl: './receiver-table.component.html',
  styleUrls: ['./receiver-table.component.css']
})
export class ReceiverTableComponent implements OnInit {

  players: Player[];
  player: Player = new Player();
  gamelogs: Gamelog[];
  author: String;
  comment: Comment = new Comment();


  constructor(private playerService: PlayerPageService) { }

  ngOnInit() {
    this.playerService.getPlayer()
      .subscribe( data => {
        this.player = data;
      });
    this.playerService.getPlayerGameLogs()
      .subscribe(data => {
        this.gamelogs = data;
      });
  }



}

  // createTable(position: String) {
  //   if (position === 'WR') {
  //     this.router.navigate(['/rece']);
  //   }
  // }

  // doSomething() {
  //   this.playerService.getPlayer()
  //     .subscribe( data => {
  //       this.player = data;
  //     });
  //   this.playerService.getPlayerGameLogs()
  //     .subscribe(data => {
  //       this.gamelogs = data;
  //     });
  // }



