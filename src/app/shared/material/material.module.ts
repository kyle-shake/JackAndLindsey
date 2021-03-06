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
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

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
   MatTableModule,
   MatListModule,
   MatGridListModule,
   MatTooltipModule,
   MatCheckboxModule,
   MatProgressSpinnerModule,
   MatRadioModule,
   MatButtonToggleModule,
   MatTabsModule,
   MatDatepickerModule,
   MatSlideToggleModule,
   MatMomentDateModule
  ]
})
export class MaterialModule { }
