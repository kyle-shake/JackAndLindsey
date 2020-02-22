import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaBaseComponent } from './media-base/media-base.component';



@NgModule({
  declarations: [MediaBaseComponent],
  imports: [
    CommonModule,
    MediaRoutingModule
  ]
})
export class MediaModule { }
