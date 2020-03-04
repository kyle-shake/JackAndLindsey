import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { HomeService } from '../home.service';
import { JnlPost } from '../interfaces/jnl-post';
import { AuthenticationService } from '@app/_services/authentication.service';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-create-post-dialog',
  templateUrl: './create-post-dialog.component.html',
  styleUrls: ['./create-post-dialog.component.sass']
})
export class CreatePostDialogComponent implements OnInit {

  createPostForm: FormGroup;
  currAuthor: string;
  newPost: JnlPost;
  submitting: boolean;
  posted: boolean;

  @ViewChild('imgFileInput', {static: false}) imgFileInput: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<CreatePostDialogComponent>,
    private HomeService: HomeService,
    private AuthService: AuthenticationService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.currAuthor = this.AuthService.currentUserValue.firstName
    this.createPostForm = this.fb.group({
      author: [this.currAuthor, Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required],
      pinned: Boolean,
      postImgFile: null
    });
  }

  onFileChange(event){
    if(event.target.files.length > 0){
      let file = event.target.files[0];
      this.createPostForm.get('file').setValue(file)
    }
  }

  private prepareSave(): any{
    let input = new FormData();
    input.append('author', this.createPostForm.get('author').value);
    input.append('title', this.createPostForm.get('title').value);
    input.append('content', this.createPostForm.get('content').value);
    input.append('pinned', this.createPostForm.get('pinned').value);
    input.append('postImgFile', this.createPostForm.get('postImgFile').value);
    return input
  }

  submitPost(){
    const formModel = this.prepareSave();
    this.submitting = true;
    this.HomeService.addPost(formModel).subscribe(
      result =>{
        this.submitting = false;
        this.posted = true;
        this.newPost = result;
      }
    )
  }

  clearFile(){
    this.createPostForm.get('postImgFile').setValue(null);
    this.imgFileInput.nativeElement.value = '';
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
