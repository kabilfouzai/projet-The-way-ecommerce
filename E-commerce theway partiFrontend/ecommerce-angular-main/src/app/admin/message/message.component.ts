import { Component, OnInit } from '@angular/core';
import { MessageServicesService } from 'src/app/service/message-services.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private messageService :MessageServicesService) { }
  messageDetails = null as any;
  ngOnInit(): void {
    this.getmessageDetails();

  }
  getmessageDetails() {
    this.messageService.getMessage().subscribe(
      (resp) => {
        console.log(resp);
        this.messageDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
