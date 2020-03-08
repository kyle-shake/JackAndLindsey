import { FormControl, Validators } from '@angular/forms';

export class MediaFilter {
  public enabled: Boolean;
  public tdate = {
     enabled: new Boolean(),
     sDate: '',
     sDateFC: new FormControl(''),
     eDate: '',
     eDateFC: FormControl
  }
  public udate = {
    enabled: Boolean,
    sDate: '',
    sDateFC: FormControl,
    eDate: '',
    eDateFC: FormControl
  }
  public physloc = {
    enabled: Boolean,
    filLocs: []
  }
  public desc = {
    enabled: Boolean,
    filVal: ''
  }
  public categories= {
    enabled: Boolean,
    filCats: []
  }
  public ytlink: object = {
    enabled: Boolean,
    withLink: Boolean
  }

  constructor(){
    this.enabled = false;
    this.tdate.enabled = false;
    this.tdate.sDateFC = new FormControl('', )
  }
}
