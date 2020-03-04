import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/_services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.sass']
})
export class LoginPanelComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  hide = true;
  email = '';
  password = '';
  private loggedin = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private AuthService: AuthenticationService
  ) {
    if(this.AuthService.currentUserValue){
      this.loggedin = true;
    }

  }

  ngOnInit() {

  }


  logUserIn(event: Event){
    this.submitted = true;


    event.stopImmediatePropagation()
    console.log("Email: ", this.email);
    console.log("Password: ", this.password);
    this.loading = true;
    this.AuthService.login(this.email, this.password, '')
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
            this.loggedin = true;
          },
          error => {
            this.error = error;
            this.loading = false;
          }
        )
  }


  signInWithFB(){

  }


}
