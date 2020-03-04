import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserOptionsPanelComponent } from './user-options-panel/user-options-panel.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '@app/shared/material/material.module';
import { RegisterUserDialogComponent } from './register-user-dialog/register-user-dialog.component';



@NgModule({
  declarations: [
    LoginPanelComponent,
    RegisterFormComponent,
    UserOptionsPanelComponent,
    RegisterUserDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule,
    MaterialModule
  ],
  providers: [],
  exports:[
    LoginPanelComponent
  ]
})
export class AdminModule { }
