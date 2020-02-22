import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosPageComponent } from './videos-page/videos-page.component';
import { AddVideoFormComponent } from './add-video-form/add-video-form.component';



@NgModule({
  declarations: [VideosPageComponent, AddVideoFormComponent],
  imports: [
    CommonModule
  ]
})
export class VideosModule { }
