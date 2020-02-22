import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookFeedComponent } from './facebook-feed/facebook-feed.component';
import { InstagramFeedComponent } from './instagram-feed/instagram-feed.component';
import { TwitterFeedComponent } from './twitter-feed/twitter-feed.component';
import { YoutubeFeedComponent } from './youtube-feed/youtube-feed.component';
import { SocialBaseComponent } from './social-base/social-base.component';



@NgModule({
  declarations: [FacebookFeedComponent, InstagramFeedComponent, TwitterFeedComponent, YoutubeFeedComponent, SocialBaseComponent],
  imports: [
    CommonModule
  ]
})
export class SocialModule { }
