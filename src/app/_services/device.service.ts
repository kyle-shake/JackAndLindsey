import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  isMobile: boolean;

  constructor() { }

  getDeviceType() {
    let ua = navigator.userAgent
    this.isMobile = false;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)){
      this.isMobile = true;
    }
    return this.isMobile
  }
}
