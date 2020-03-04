import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JnlPost } from './interfaces/jnl-post';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<JnlPost[]>{
    return this.http.get<JnlPost[]>(`${environment.apiUrl}/posts`)
  }

  addPost(postObj: JnlPost){
    return this.http.post<JnlPost>(`${environment.apiUrl}/posts`, postObj);
  }

  markPostAsPinned(postID){

  }

  deletePost(postID){

  }

}
