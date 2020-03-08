import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JnlVideo } from '../interfaces/jnl-video';
import { JnlPhoto } from '../interfaces/jnl-photo';

@Component({
  selector: 'app-media-viewer-dialog',
  templateUrl: './media-viewer-dialog.component.html',
  styleUrls: ['./media-viewer-dialog.component.sass']
})
export class MediaViewerDialogComponent implements OnInit {

  mediaToView: JnlVideo | JnlPhoto;
  currMediaCategories: string[] = [];
  isPhoto: boolean;

  constructor(
    public dialogRef: MatDialogRef<MediaViewerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.isPhoto = this.data.hasOwnProperty('photo');
    this.mediaToView = this.isPhoto ? <JnlPhoto>this.data.photo : <JnlVideo>this.data.video;
    this.currMediaCategories = this.mediaToView.categories.split(',');
  }


}
