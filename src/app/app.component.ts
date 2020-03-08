import { Component, ChangeDetectorRef, OnInit, OnChanges } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { JnlUser } from './_models/jnl-user';
import { Router, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';
import { DeviceService } from './_services/device.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: []
})
export class AppComponent implements OnInit, OnChanges{
  title = 'JacknLindsey';

  currentUser: JnlUser;
  isMobile: boolean;



  constructor(
    private router: Router,
    private _authService: AuthenticationService,
    private _deviceService: DeviceService,
    changeDetectRef: ChangeDetectorRef,
    mediaMatcher: MediaMatcher
  ){

  }

  ngOnInit(){
    this.isMobile = this._deviceService.getDeviceType();
    console.log(this.router.url);
  }

  ngOnChanges(){
    console.log(this.router.url);
  }

  get isAdmin(){
    return this.currentUser && this.currentUser.admin;
  }

  getAnimationData(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
