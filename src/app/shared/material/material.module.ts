import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  exports: [
   MatSidenavModule,
   MatToolbarModule,
   MatMenuModule,
   MatFormFieldModule,
   MatInputModule,
   MatCardModule,
   MatExpansionModule,
   MatButtonModule,
   MatIconModule,
   MatBottomSheetModule,
   MatDialogModule,
   MatTableModule
  ]
})
export class MaterialModule { }
