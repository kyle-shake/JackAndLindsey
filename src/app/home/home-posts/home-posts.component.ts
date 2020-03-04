import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

import { HomeService } from '../home.service';
import { JnlPost } from '../interfaces/jnl-post';
import { AuthenticationService } from '@app/_services/authentication.service';
import { CreatePostDialogComponent } from '../create-post-dialog/create-post-dialog.component';
import { ConfirmActionDialogComponent } from '@app/shared/confirm-action-dialog/confirm-action-dialog.component';
import { ShareItemBottomSheetComponent } from '@app/shared/share-item-bottom-sheet/share-item-bottom-sheet.component';

@Component({
  selector: 'app-home-posts',
  templateUrl: './home-posts.component.html',
  styleUrls: ['./home-posts.component.sass']
})
export class HomePostsComponent implements OnInit {

  isLoading = true;
  isAdmin = false;
  allPosts: JnlPost[];

  constructor(
    private _homeService: HomeService,
    private _authService: AuthenticationService,
    private _bottomSheet: MatBottomSheet,
    public createPostDialog: MatDialog,
    public confirmDialog: MatDialog

  ) { }

  ngOnInit(): void {
    if(this._authService.currentUserValue)
      this.isAdmin = this._authService.currentUserValue.admin;
    this._homeService.getPosts().subscribe(
      results =>{
        this.allPosts = results;
        this.isLoading = false;
      }
    )
  }

  addPost(){
    const createPostDialogRef = this.createPostDialog.open(CreatePostDialogComponent, {
      disableClose: true
    });

    createPostDialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.allPosts.forEach((obj, idx)=>{
          if(!obj.pinned){
            this.allPosts.splice(idx, 0, result);
          }
        })
      }
    })
  }

  markPostPinned(postID){
    this.allPosts.forEach((obj, idx) =>{
      if(obj.id === postID){
        obj.pinned = true;
      }
    });
    //ToDo: Make Post rise to top
    this._homeService.markPostAsPinned(postID);
  }

  deletePost(postID){
    //Confirm Dialog
    const confirmDialogRef = this.confirmDialog.open(ConfirmActionDialogComponent, {
      data: {message: 'Delete Post?'}
    });

    confirmDialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.allPosts.forEach((obj, idx)=>{
          if(obj.id === postID){
            this.allPosts.splice(idx, 1);
          }
        });

        this._homeService.deletePost(postID);
      }
    })

    //ToDo: Make Post fade away
  }

  sharePost(post: JnlPost){
    this._bottomSheet.open(ShareItemBottomSheetComponent,
      {
        data: { post: post }
      });
  }

}
