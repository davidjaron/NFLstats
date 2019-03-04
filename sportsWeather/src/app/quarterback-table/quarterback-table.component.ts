import { Component, OnInit } from '@angular/core';
import {Player} from '../models/player';
import {Gamelog} from '../models/gamelog';
import {PlayerPageService} from '../services/player-page.service';

@Component({
  selector: 'app-quarterback-table',
  templateUrl: './quarterback-table.component.html',
  styleUrls: ['./quarterback-table.component.css']
})
export class QuarterbackTableComponent implements OnInit {

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
