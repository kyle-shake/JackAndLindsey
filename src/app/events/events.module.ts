import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsBaseComponent } from './events-base/events-base.component';
import { EventsTableComponent } from './events-table/events-table.component';

import { MaterialModule } from '@app/shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateEventDialogComponent } from './create-event-dialog/create-event-dialog.component';
import { EventsListComponent } from './events-list/events-list.component';


@NgModule({
  declarations: [
    EventsBaseComponent,
    EventsTableComponent,
    CreateEventDialogComponent,
    EventsListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EventsRoutingModule,
    MaterialModule
  ],
  //schemas: [NO_ERRORS_SCHEMA]
})
export class EventsModule { }
