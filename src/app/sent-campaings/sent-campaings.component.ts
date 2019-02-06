import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sent-campaings',
  templateUrl: './sent-campaings.component.html',
  styleUrls: ['./sent-campaings.component.scss']
})
export class SentCampaingsComponent implements OnInit {
  campaigns = [
    {
      campaignsTitle: "Hyundai i4D",
      date: "25 May 2017",
      hour: "08:08 AM",
      components: "1896",
      opened: "41%",
      cta: "39%",
      responses: "45%",
      newMessages:""
    },
    {
      campaignsTitle: "New Hyundai",
      date: "25 May 2017",
      hour: "08:08 AM",
      components: "5121",
      opened: "89%",
      cta: "18%",
      responses: "37%",
      newMessages:"1"
    },
    {
      campaignsTitle: "Hyundai i30",
      date: "25 May 2017",
      hour: "08:08 AM",
      components: "8560",
      opened: "63%",
      cta: "55%",
      responses: "75%",
      newMessages:"4"
    },
    {
      campaignsTitle: "Hyundai Santa Fé",
      date: "25 May 2017",
      hour: "08:08 AM",
      components: "732",
      opened: "16%",
      cta: "78%",
      responses: "25%",
      newMessages:"24"
    },
    {
      campaignsTitle: "Hyundai Premium",
      date: "25 May 2017",
      hour: "08:08 AM",
      components: "64",
      opened: "72%",
      cta: "25%",
      responses: "51%",
      newMessages:"24"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  isEmpty(numMsg){
    if(numMsg == ''){
      return true;
    } else{
      return false;
    }
  }

}
