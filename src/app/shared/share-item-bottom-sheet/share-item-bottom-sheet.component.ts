import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-share-item-bottom-sheet',
  templateUrl: './share-item-bottom-sheet.component.html',
  styleUrls: ['./share-item-bottom-sheet.component.sass']
})
export class ShareItemBottomSheetComponent implements OnInit {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) { }

  ngOnInit(): void {

  }

  shareToFacebook(){

  }

  shareToInstagram(){

  }

  shareToTwitter(){

  }

}
