import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { environment } from '@env/environment';

import { JnlUser } from '@app/_models/jnl-user';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<JnlUser>;
  public currentUser: Observable<JnlUser>;

  constructor(
    private http: HttpClient,
    private socialAuthService: AuthService
  ) {
    this.currentUserSubject = new BehaviorSubject<JnlUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  public get currentUserValue(): JnlUser{
     return this.currentUserSubject.value;
   }

  login(email: string, password: string, fbID: string){
    let params = {
      "email": email,
      "password": password,
      "fbID": fbID
    }
    return this.http.post<any>(`${environment.apiUrl}/login`, params, {
      headers: new HttpHeaders({"content-type": "application/json"})
    })
    .pipe(map(result => {
      console.log("[func login():] Result: ", result) //Debug
      let data = result.json();
      console.log("[func login():] Data: ", data); //Debug
      let userData: JnlUser = data.userData;
      console.log("[func login():] userData: ", userData);
      if(data.token){
        userData.token = data.token;
        localStorage.setItem('currentUser', JSON.stringify(userData));
        //this.currentUserSubject.next(userData);
      }

      return result;
    }));
  }

  loginWithFB(){
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      result =>{
        console.log(result); //Debug
        if(result.facebook){
          return this.login(result.email, '', result.id)
        }
      }
    );
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  logoutFromFB(){
    this.socialAuthService.signOut()
  }

  registerUser(fName, lName, email, password, fbID){
    var params ={
      "fName": fName,
      "lName": lName,
      "email": email,
      "password": password,
      "fbID": fbID
    }
    return this.http.post<any>(`${environment.apiUrl}/register`, params)
    .pipe(map(result => {
      console.log("[func registerUser():] result:", result);//Debug
      let data = result.json();
      let userData: JnlUser = data.userData;
      if(data.token){
        userData.token = data.token;
        localStorage.setItem('currentUser', JSON.stringify(userData));
        this.currentUserSubject.next(userData);

      }

      return result;
    }))
  }

  registerWithFB(){
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      result => {
        console.log(result);
        if(result.facebook){
          return this.registerUser(result.firstName, result.lastName, result.email, '', result.id);
        }
      }
    )
  }

  connectUserToFacebook(){

  }
}
