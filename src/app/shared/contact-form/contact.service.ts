import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }


  sendContactEmail(contactDetails){
    this.http.post<any>(`${environment.apiUrl}/email`, contactDetails); //ToDo: Set up backend emailer
  }
}
