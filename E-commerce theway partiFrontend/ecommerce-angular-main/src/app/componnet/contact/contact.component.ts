import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageServicesService } from 'src/app/service/message-services.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  MessageDetails = null as any;
  MessageToUpdate = {
    id:"",
    nom:"",
    email:"",
    sujet:"",
    message:""

  }
  constructor(private messageService :MessageServicesService) { }

  ngOnInit(): void {
  }
  register(registerForm: NgForm) {
    this.messageService.registerMessage(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        alert('votre message a ete bien envoyee')
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
