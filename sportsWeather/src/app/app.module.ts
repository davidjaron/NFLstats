import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PlayerSearchComponent } from './player-search/player-search.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PlayerPageComponent } from './player-page/player-page.component';
import { HttpClientModule } from '@angular/common/http';
import {RegisterService} from './services/register.service';
import { AdminPageComponent } from './admin-page/admin-page.component';
import {AdminService} from './services/admin.service';
import {PlayerPageService} from './services/player-page.service';
import { PlayerSearchResultsComponent } from './player-search-results/player-search-results.component';
import { GamelogBoxComponent } from './gamelog-box/gamelog-box.component';
import { ReceiverTableComponent } from './receiver-table/receiver-table.component';
import { QuarterbackTableComponent } from './quarterback-table/quarterback-table.component';
import { RunningbackTableComponent } from './runningback-table/runningback-table.component';
import {CommentService} from './services/comment.service';
import { CommentForPlayerComponent } from './comment-for-player/comment-for-player.component';
import { ListOfWatchlistsComponent } from './list-of-watchlists/list-of-watchlists.component';
import {WatchlistService} from './services/watchlist.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PlayerSearchComponent,
    HomepageComponent,
    PlayerPageComponent,
    AdminPageComponent,
    PlayerSearchResultsComponent,
    GamelogBoxComponent,
    ReceiverTableComponent,
    QuarterbackTableComponent,
    RunningbackTableComponent,
    CommentForPlayerComponent,
    ListOfWatchlistsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    RegisterService,
    AdminService,
    PlayerPageService,
    CommentService,
    WatchlistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
