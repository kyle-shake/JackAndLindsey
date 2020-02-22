import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';



@NgModule({
  declarations: [TopNavComponent, SideNavComponent, LoadingDialogComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
