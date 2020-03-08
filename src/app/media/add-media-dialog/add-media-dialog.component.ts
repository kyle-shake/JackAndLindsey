import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { JnlPhoto } from '../interfaces/jnl-photo';
import { JnlVideo } from '../interfaces/jnl-video';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-add-media-dialog',
  templateUrl: './add-media-dialog.component.html',
  styleUrls: ['./add-media-dialog.component.sass']
})
export class AddMediaDialogComponent implements OnInit {

  addEditMediaForm: FormGroup;

  isPhoto: boolean; //if not a photo, it's a video ;)
  isAdd: boolean; //if not adding, it's editing
  MedToEdit: JnlPhoto | JnlVideo;
  mediaAdded: (JnlPhoto|JnlVideo)[];

  isSubmitting: boolean;
  isSubmitted: boolean;

  @ViewChild('mediaFileInput', {static: false}) mediaFileInput: ElementRef;

  constructor(
    private fb: FormBuilder,
    private MediaService: MediaService,
    public dialogRef: MatDialogRef<AddMediaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {     }

  ngOnInit(): void {
    this.isPhoto = this.data.mediaType === "photos";
    this.MedToEdit = this.data.medToEdit;
    if(this.MedToEdit){
      this.isAdd = false;
    }
    else{
      this.isAdd = true;
    }
  }

  createAddForm(){
    this.addEditMediaForm = this.fb.group({
      tdate: ['', Validators.required],
      physloc: [''],
      desc: [''],
      categories: [''],
      ytlink: [''],
      mediaFile: null
    })
  }

  createEditForm(){
    let ytlink = this.data.MedToEdit.ytlink;
    this.addEditMediaForm = this.fb.group({
      tdate: [this.MedToEdit.tdate, Validators.required],
      physloc: [this.MedToEdit.physloc],
      desc: [this.MedToEdit.desc],
      categories: [this.MedToEdit.categories],
      ytlink: [ytlink],
    })
  }


  onFileChange(event){
    if(event.target.files.length > 0){
      let file = event.target.files[0];
      this.addEditMediaForm.get('mediaFile').setValue(file);
    }
  }

  private prepareSave(): any{
    let input = new FormData();
    input.append('tdate', this.addEditMediaForm.get('tdate').value);
    input.append('physloc', this.addEditMediaForm.get('physloc').value);
    input.append('desc', this.addEditMediaForm.get('desc').value);
    input.append('categories', this.addEditMediaForm.get('categories').value);
    input.append('ytlink', this.addEditMediaForm.get('ytlink').value);
    input.append('mediaFile', this.addEditMediaForm.get('mediaFile').value);
    return input
  }

  submitMedia(){
    const formModel = this.prepareSave();
    this.isSubmitting = true;
    if(this.isPhoto){
      this.MediaService.addPhoto(formModel).subscribe(
        result =>{
            this.isSubmitting = false;
            this.isSubmitted = true;
            this.mediaAdded.push(result);
        }
      )
    }else{
      this.MediaService.addVideo(formModel).subscribe(
        result =>{
          this.isSubmitting = false;
          this.isSubmitted = true;
          this.mediaAdded.push(result);
        }
      )
    }
  }

  clearFile(){
    this.addEditMediaForm.get('mediaFile').setValue(null);
    this.mediaFileInput.nativeElement.value = '';
  }

  clearForm(){
    this.createAddForm();
    this.clearFile();
    this.isSubmitted = false;
  }
  }
