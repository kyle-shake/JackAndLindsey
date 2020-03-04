import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsBaseComponent } from './events-base/events-base.component';


const routes: Routes = [
  {
    path: 'events', pathMatch: 'full', component: EventsBaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
