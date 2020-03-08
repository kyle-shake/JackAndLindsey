import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JnlPhoto } from './interfaces/jnl-photo';
import { JnlVideo } from './interfaces/jnl-video';
import { MediaService } from './media.service';
import { Observable, of, EmptyError, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaResolverService implements Resolve<JnlPhoto|JnlVideo>{

  constructor(
    private MediaService: MediaService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<JnlPhoto> | Observable<JnlVideo>{
    let mediatype = route.paramMap.get('mediatype');
    if(mediatype == 'photos'){
      return this.MediaService.getPhotos().pipe(
        mergeMap(photos => {
          if(photos){
            return of(photos)
          }else{
            this.router.navigate(['/404'])
            return EMPTY;
          }
        })
      )
    }else if(mediatype == 'videos'){
      return this.MediaService.getVideos().pipe(
        mergeMap(videos => {
          if(videos){
            return of(videos)
          }else{
            this.router.navigate['/404'];
            return EMPTY;
          }
        })
      )
    }else{
      this.router.navigate['/404'];
    }

  }
}
