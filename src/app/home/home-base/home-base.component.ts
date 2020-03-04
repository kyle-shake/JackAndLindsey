import { Component, OnInit } from '@angular/core';

import { DeviceService } from '@app/_services/device.service';

@Component({
  selector: 'app-home-base',
  templateUrl: './home-base.component.html',
  styleUrls: ['./home-base.component.sass']
})
export class HomeBaseComponent implements OnInit {

  isMobile: boolean;

  constructor(
    private _deviceService: DeviceService
  ){}

  ngOnInit(){
    this.isMobile = this._deviceService.isMobile
    if(!this.isMobile){
      this.isMobile = this._deviceService.getDeviceType()
    }
  }


}
