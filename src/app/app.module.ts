import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotificationsFeedComponent } from './notifications-feed/notifications-feed.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SentCampaingsComponent } from './sent-campaings/sent-campaings.component';
import { CampaignsComponent } from './campaigns/campaigns.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationsFeedComponent,
    SentCampaingsComponent,
    CampaignsComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
