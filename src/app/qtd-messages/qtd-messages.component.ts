import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qtd-messages',
  templateUrl: './qtd-messages.component.html',
  styleUrls: ['./qtd-messages.component.scss']
})
export class QtdMessagesComponent implements OnInit {
  
  @Input() qtdMessagesComponent;

  constructor() { 
  }

  ngOnInit() {
    console.log("oninit msg");
    this.defineClass();
  }

  defineClass(){
    console.log("dentro do metodo define Class");
      if(this.qtdMessagesComponent == "" 
        || this.qtdMessagesComponent == null
        || this.qtdMessagesComponent == undefined){
          document.getElementById("numeroMessages").classList.add("empty-messages");
      } else{
        console.log(this.qtdMessagesComponent);
      // document.getElementById("numeroMessages").innerHTML = "{{qtdMessagesComponent}}";
          document.getElementById("numeroMessages").classList.add("number-message");
      }
    }
  }
