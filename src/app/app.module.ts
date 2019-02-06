import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { NotificationsFeedComponent } from './notifications-feed/notifications-feed.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SentCampaingsComponent } from './sent-campaings/sent-campaings.component';
import { QtdMessagesComponent } from './qtd-messages/qtd-messages.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    SubMenuComponent,
    NotificationsFeedComponent,
    SentCampaingsComponent,
    QtdMessagesComponent,
    HeaderNavigationComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
