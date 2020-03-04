import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { JnlEvent } from './interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  baseUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }


  getEvents(){
    return this.http.get<JnlEvent[]>(`${this.baseUrl}/events`);
  }

  getEvent(event_id){
    return this.http.get<JnlEvent[]>(`${this.baseUrl}/event/${event_id}`);
  }

  editEvent(event_id, eventdata){
    return this.http.put<JnlEvent>(`${this.baseUrl}/event/${event_id}`, eventdata);
  }

  deleteEvent(event_id){
    let response = this.http.delete(`${this.baseUrl}/event/${event_id}`);
    console.log(response);
  }

  createEvent(eventdata){
    let response = this.http.post<any>(`${this.baseUrl}/event`, eventdata);
    console.log(response);
    return response;
  }
}
