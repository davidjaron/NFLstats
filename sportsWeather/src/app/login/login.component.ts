import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import {AdminService} from '../services/admin.service';
import {User} from '../models/user';
import {PlayerPageComponent} from '../player-page/player-page.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private appComponent: AppComponent, private adminService: AdminService) { }

  username: String;
  password: String;
  aUserType: String;
  aUser: User = new User();

  login1 = (username) => {
    this.appComponent.setCurrentUser(username);

    this.adminService.getUser(username)
      .subscribe(data => {
        console.log(data);
        this.aUser = data;
        this.aUserType = this.aUser.userType;
        this.appComponent.setCurrentUserType(this.aUserType);

        console.log('This is the current Type: ' + this.appComponent.getCurrentUserType());
        if (this.aUserType === 'Team Manager') {
          this.appComponent.showWatchList();
          this.appComponent.hideAdminButton();
          this.router.navigate(['/profile']);
        } else if (this.aUserType === 'Admin') {
          this.appComponent.showAdminButton();
          this.router.navigate(['/admin-page']);
        } else {
          this.router.navigate(['/profile']);
        }
      });
    this.appComponent.showProfileButton();
  }


  ngOnInit() {
  }

}
