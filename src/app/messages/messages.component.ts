import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  template: `
  <div *ngIf="messageService.messages.length">

    <h2>Messages</h2>
    <button type="button" mat-button color="primary"
            (click)="messageService.clear()">Clear messages</button>
    <div *ngFor='let message of messageService.messages'> {{message}} </div>
  
  </div>`,
  styles: []
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessagesService) {}

  ngOnInit(): void {
  }

}