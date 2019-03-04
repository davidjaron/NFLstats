import { Component, OnInit } from '@angular/core';
import {WatchlistService} from '../services/watchlist.service';
import {User} from '../models/user';
import {Player} from '../models/player';
import {Watchlist} from '../models/watchlist';
import {PlayerPageService} from '../services/player-page.service';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-list-of-watchlists',
  templateUrl: './list-of-watchlists.component.html',
  styleUrls: ['./list-of-watchlists.component.css']
})
export class ListOfWatchlistsComponent implements OnInit {


  user: User = new User();
  players: Player[];

  constructor(private router: Router, private appComponent: AppComponent, private watchListService: WatchlistService, private playerService: PlayerPageService) { }

  ngOnInit() {
    this.watchListService.getPlayers(this.appComponent.currentUser)
      .subscribe(data => {
        console.log(data);
        this.players = data;
      });
  }

  goToPlayerPage(firstName: String, lastName: String) {
    this.playerService.setNames(firstName, lastName);
    this.router.navigate(['/player-page']);
  }

  deletePlayerFromWatchList(firstName: String, lastName: String) {
    alert('Deleted from watchlist: ' + firstName + lastName);
    this.watchListService.deletePlayerFromWatchList(firstName, lastName)
      .subscribe(data => console.log(data), error => console.log(error));
  }

}
