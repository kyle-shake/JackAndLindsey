import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private AuthService: AuthenticationService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    const currentUser = this.AuthService.currentUserValue;
    console.log("Auth Guard Hit")
    if(currentUser){


      //check if route is restricted by role
      if(route.data.admin){

        //this.router.navigate(['/']);
        return false;
      }

      //authorized
      return true;
    }

    //this.router.navigate(['/'], { queryParams: {returnUrl: state.url}});
    return false;
  }

}
