import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JnlPhoto } from './interfaces/jnl-photo';
import { environment } from '@env/environment';
import { JnlVideo } from './interfaces/jnl-video';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(
    private http: HttpClient
  ) { }

  getPhotos(){
    return this.http.get<JnlPhoto[]>(`${environment.apiUrl}/photos`);
  }

  getVideos(){
    return this.http.get<JnlVideo[]>(`${environment.apiUrl}/videos`);
  }

  addPhoto(photoObj){
    return this.http.post<JnlPhoto>(`${environment.apiUrl}/photos`, photoObj);
  }

  addVideo(videoObj){
    return this.http.post<JnlVideo>(`${environment.apiUrl}/videos`, videoObj);
  }
}
