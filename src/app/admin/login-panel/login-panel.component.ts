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
  loggedin = false;
  firstName = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private AuthService: AuthenticationService
  ) {
    if(this.AuthService.currentUserValue){
      this.loggedin = true;
      this.firstName = this.AuthService.currentUserValue.firstName;
    }

  }

  ngOnInit() {

  }


  logUserIn(event: Event){
    this.submitted = true;


    event.stopImmediatePropagation()

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
