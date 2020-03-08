import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactBaseComponent } from './contact-base/contact-base.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/shared/material/material.module';



@NgModule({
  declarations: [
    ContactBaseComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ContactModule { }
