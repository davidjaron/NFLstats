import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sports By Watchlist';
  currentUser = '';
  currentUserType = 'Anonymous';
  buttonElement: HTMLElement;

  setCurrentUserType(userType) {
    this.currentUserType = userType;
  }

  getCurrentUserType() {
    return this.currentUserType;
  }

  setCurrentUser(username) {
    this.currentUser = username;
  }

  showWatchList() {
    this.buttonElement = document.getElementById('watchlist-button');
    this.buttonElement.setAttribute('style', 'visibility: visible');
  }

  showAdminButton() {
    this.buttonElement = document.getElementById('admin-button');
    this.buttonElement.setAttribute('style', 'visibility: visible');
  }

  hideAdminButton() {
    this.buttonElement = document.getElementById('admin-button');
    this.buttonElement.setAttribute('style', 'visibility: hidden');
  }

  showProfileButton() {
    this.buttonElement = document.getElementById('profile-button');
    this.buttonElement.setAttribute('style', 'visibility: visible');
  }

}
