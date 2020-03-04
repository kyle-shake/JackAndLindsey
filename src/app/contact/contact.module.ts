import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactBaseComponent } from './contact-base/contact-base.component';
import { ContactPageComponent } from './contact-page/contact-page.component';



@NgModule({
  declarations: [ContactBaseComponent, ContactPageComponent],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
