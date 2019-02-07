import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications-feed',
  templateUrl: './notifications-feed.component.html',
  styleUrls: ['./notifications-feed.component.scss']
})
export class NotificationsFeedComponent implements OnInit {
  $: any;
  notifications = [
    {
      type: "wrote",
      sender: "João das Neves",
      date: "25 May 2017",
      hour: "11:34",
      message: "Mensagem de notificação 1 ",
    }, 
    {
      type: "called",
      sender: "João das Neves",
      date: "26 May 2017",
      hour: "11:34",
      message: "Mensagem de notificação 2 ",
    },
    {
      type: "wrote",
      sender: "Mary",
      date: "26 May 2017",
      hour: "01:11",
      message: "Mensagem de notificação 3 ",
    }
  ]
  isWroteNotification = function(type){
    return type == "wrote"
  }
  constructor() { }

  ngOnInit() {
  }
}
