import { Component, OnInit } from '@angular/core';
import {Player} from '../models/player';
import {Gamelog} from '../models/gamelog';
import {PlayerPageService} from '../services/player-page.service';

@Component({
  selector: 'app-runningback-table',
  templateUrl: './runningback-table.component.html',
  styleUrls: ['./runningback-table.component.css']
})
export class RunningbackTableComponent implements OnInit {

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
