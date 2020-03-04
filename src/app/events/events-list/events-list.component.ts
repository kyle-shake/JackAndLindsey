import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events-service.service';
import { Observable } from 'rxjs';
import { JnlEvent } from '../interfaces/event';
import { MatDialog } from '@angular/material/dialog';
import { CreateEventDialogComponent } from '../create-event-dialog/create-event-dialog.component';
import { ConfirmActionDialogComponent } from '@app/shared/confirm-action-dialog/confirm-action-dialog.component';
import { AuthenticationService } from '@app/_services/authentication.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ShareItemBottomSheetComponent } from '@app/shared/share-item-bottom-sheet/share-item-bottom-sheet.component';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.sass']
})
export class EventsListComponent implements OnInit {
  isLoading = true;
  isAdmin = false;
  eventsData: JnlEvent[];

  constructor(
    private EventService: EventsService,
    private _authService: AuthenticationService,
    private _bottomSheet: MatBottomSheet,
    public createEventDialog: MatDialog,
    public confirmDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.isAdmin = this._authService.currentUserValue.admin;
    this.EventService.getEvents().subscribe(results =>{
        console.log(results);
        this.eventsData = results;
        this.isLoading = false;
      });
  }

  addEvent(){
    const createEventDialogRef = this.createEventDialog.open(CreateEventDialogComponent, {
      disableClose: true,
      data: {eventToEdit: null}
    });

    createEventDialogRef.afterClosed().subscribe(result =>{
        if(result){
          this.eventsData.forEach((obj, idx)=>{
            if(obj.edate > result.edate){
              this.eventsData.splice(idx, 0, result);
            }
          });
        }
      });
  }

  editEvent(event: JnlEvent){
    const editEventDialogRef = this.createEventDialog.open(CreateEventDialogComponent, {
      disableClose: true,
      data: {eventToEdit: event}
    });

    editEventDialogRef.afterClosed().subscribe(result =>{
        if(result){
          this.eventsData.forEach((obj, idx)=>{
            if(obj.id === result.id){
              obj = result;
            }
          });
        }
      });
  }

  deleteEvent(eventID){
    const confirmDialogRef = this.confirmDialog.open(ConfirmActionDialogComponent,{
      data: {message: 'Delete Event?'}
    });

    confirmDialogRef.afterClosed().subscribe(result =>{
        if(result){
          this.eventsData.forEach((obj, idx) =>{
            if(obj.id === eventID){
              this.eventsData.splice(idx, 1);
            }
          })
          this.EventService.deleteEvent(eventID);
        }
      });

  }

  shareEvent(event: JnlEvent){
    this._bottomSheet.open(ShareItemBottomSheetComponent,
      {
        data: {event: event}
      });
  }

}
