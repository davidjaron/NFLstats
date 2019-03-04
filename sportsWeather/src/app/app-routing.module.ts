import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {PlayerSearchComponent} from './player-search/player-search.component';
import {HomepageComponent} from './homepage/homepage.component';
import {PlayerPageComponent} from './player-page/player-page.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {PlayerSearchResultsComponent} from './player-search-results/player-search-results.component';
import {GamelogBoxComponent} from './gamelog-box/gamelog-box.component';
import {ReceiverTableComponent} from './receiver-table/receiver-table.component';
import {QuarterbackTableComponent} from './quarterback-table/quarterback-table.component';
import {RunningbackTableComponent} from './runningback-table/runningback-table.component';
import {CommentForPlayerComponent} from './comment-for-player/comment-for-player.component';
import {ListOfWatchlistsComponent} from './list-of-watchlists/list-of-watchlists.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'player-search', component: PlayerSearchComponent},
  {path: '', component: HomepageComponent},
  {path: 'player-page', component: PlayerPageComponent},
  {path: 'admin-page', component: AdminPageComponent},
  {path: 'player-search-results', component: PlayerSearchResultsComponent},
  {path: 'game-log-box', component: GamelogBoxComponent},
  {path: 'receiver-table', component: ReceiverTableComponent},
  {path: 'quarterback-table', component: QuarterbackTableComponent},
  {path: 'runningback-table', component: RunningbackTableComponent},
  {path: 'comment-for-player', component: CommentForPlayerComponent},
  {path: 'list-of-watchlists', component: ListOfWatchlistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
