import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Directionality } from '@angular/cdk/bidi';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  error = '';
  disabled: boolean = false;
  //private envVariable = process.env.variable;

  constructor(private authenticationService: AuthenticationService, private router: Router,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      this.router.navigate(["/home"]);
    }
    //console.log(this.envVariable);
  }

  public onLogin() {
    console.log(this.username);
    console.log(this.password);
    this.disabled = true;
    this.authenticationService.login(this.username, this.password).subscribe((data) => {
      this.router.navigate(["/home"]);
      this.disabled = false;
    }, (error) => {
      this.snackbar.open("Invalid Username or Password", '', {
        duration: 4000
      })
      this.disabled = false;
      this.username = "";
      this.password = "";
    });
  }

}
