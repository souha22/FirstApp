import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import {AuthenticationService} from './shared/authentication.service';
import {User} from './model/user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp2';
  mylogo:string ="src/app/assets/image/logo.jpg";
  currentUser: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
    ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }


  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
