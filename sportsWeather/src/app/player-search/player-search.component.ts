import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PlayerPageService} from '../services/player-page.service';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.css']
})
export class PlayerSearchComponent implements OnInit {
  player: String;

  constructor(private router: Router, private searchService: PlayerPageService) {
  }

  search = (player1) => {
    const LSplit = player1.split(' ', 2);
    if(LSplit.length === 2) {
      this.searchService.setNames(LSplit[0], LSplit[1]);
      this.router.navigate(['/player-page']);
    } else {
      this.searchService.setOneName(LSplit[0]);
      this.router.navigate(['/player-search-results']);
    }
  }

  ngOnInit() {
  }

}

