import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

  isHome() {
    return this.router.url.endsWith("home");
  }

  getTitle() {
    if (this.router.url.endsWith("transfer")) {
      return "History of Transfer";
    } else if (this.router.url.endsWith("track")) {
      return "Track a Transfer";
    } else if (this.router.url.endsWith("stats")) {
      return "Hospital Statistics";
    }
    else {
      return "Al-Locate";
    }
  }

  backArrowClicked() {
    this.router.navigate(["/home"]);
  }

}
