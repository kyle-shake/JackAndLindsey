import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaBaseComponent } from './media-base/media-base.component';
import { MediaGridComponent } from './media-grid/media-grid.component';
import { MediaResolverService } from './media-resolver.service';



const routes: Routes = [
  {
    path: 'media', component: MediaBaseComponent,
    children: [
      { path: ':mediatype',
        component: MediaGridComponent,
        resolve: {
          photos: MediaResolverService,
          videos: MediaResolverService
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
