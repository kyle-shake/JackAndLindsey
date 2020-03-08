import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';
import { MaterialModule } from './material/material.module';
import { ConfirmActionDialogComponent } from './confirm-action-dialog/confirm-action-dialog.component';
import { ShareItemBottomSheetComponent } from './share-item-bottom-sheet/share-item-bottom-sheet.component';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoadingDialogComponent,
    ConfirmActionDialogComponent,
    ShareItemBottomSheetComponent,
    ContactDialogComponent,
    ContactFormComponent
    ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ContactFormComponent,
    MaterialModule
  ]
})
export class SharedModule { }
