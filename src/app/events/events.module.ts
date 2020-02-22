import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsBaseComponent } from './events-base/events-base.component';
import { EventsTableComponent } from './events-table/events-table.component';


@NgModule({
  declarations: [EventsBaseComponent, EventsTableComponent],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
