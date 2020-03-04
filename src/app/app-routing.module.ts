import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBaseComponent } from './home/home-base/home-base.component';
import { ContactBaseComponent } from './contact/contact-base/contact-base.component';
import { HomePostsComponent } from './home/home-posts/home-posts.component';
import { ContactPageComponent } from './contact/contact-page/contact-page.component';
import { PageNotFoundComponent } from './misc/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomeBaseComponent,//, data: {}
    children: [
      {
        path: '',
        component: HomePostsComponent
      }
    ]
  },
  {
    path: 'contact',
    component: ContactBaseComponent,
    children: [
      {
        path: '',
        component: ContactPageComponent
      }
    ]
  },
  {
    path: '**', component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
