import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaBaseComponent } from './media-base/media-base.component';
import { SharedModule } from '@app/shared/shared.module';

import { MediaGridComponent } from './media-grid/media-grid.component';
import { AddMediaDialogComponent } from './add-media-dialog/add-media-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MediaViewerDialogComponent } from './media-viewer-dialog/media-viewer-dialog.component';
import { FilterMediaDialogComponent } from './filter-media-dialog/filter-media-dialog.component';



@NgModule({
  declarations: [
    MediaBaseComponent,
    MediaGridComponent,
    AddMediaDialogComponent,
    MediaViewerDialogComponent,
    FilterMediaDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MediaRoutingModule,
    SharedModule,

  ],
  entryComponents: [
    AddMediaDialogComponent
  ]
})
export class MediaModule { }
