import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBaseComponent } from './home-base/home-base.component';
import { MaterialModule } from '@app/shared/material/material.module';
import { HomePostsComponent } from './home-posts/home-posts.component';
import { CreatePostDialogComponent } from './create-post-dialog/create-post-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmActionDialogComponent } from '@app/shared/confirm-action-dialog/confirm-action-dialog.component';
import { ShareItemBottomSheetComponent } from '@app/shared/share-item-bottom-sheet/share-item-bottom-sheet.component';




@NgModule({
  declarations: [
    HomeBaseComponent,
    HomePostsComponent,
    CreatePostDialogComponent
    ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [
    CreatePostDialogComponent,
    ConfirmActionDialogComponent,
    ShareItemBottomSheetComponent
  ]
})
export class HomeModule  {


 }
