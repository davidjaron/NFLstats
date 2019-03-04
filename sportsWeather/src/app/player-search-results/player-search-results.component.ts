import { Component, OnInit } from '@angular/core';
import {PlayerPageService} from '../services/player-page.service';
import {Player} from '../models/player';
import {Router} from '@angular/router';

@Component({
  selector: 'app-player-search-results',
  templateUrl: './player-search-results.component.html',
  styleUrls: ['./player-search-results.component.css']
})
export class PlayerSearchResultsComponent implements OnInit {

  players: Player[];

  constructor(private router: Router, private searchService: PlayerPageService) { }

  ngOnInit() {
    this.searchService.getPlayersByKeyword()
      .subscribe( data => {
        this.players = data;
      });
  }

  goToPage(firstName: String, lastName: String) {
    this.searchService.setNames(firstName, lastName);
    this.router.navigate(['/player-page']);
  }

}
