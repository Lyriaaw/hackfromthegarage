import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import { Chart } from 'chart.js';
import {Message} from '../../models/message';
import {WebsocketService} from '../../services/websocket.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  title = 'Chat';


  message: Message;

  messages: Message[] = [];

  @Input() origin: string;

  constructor(private apiService: ApiService, private socket: WebsocketService, private route: ActivatedRoute,) {

    this.socket.initSocket();

    this.socket.onMessage().subscribe( message => {
      console.log('Received message', message);
      setTimeout(() => {
        this.messages.push(message);
      }, 10);
      if (this.messages.length > 8) {
        this.messages.shift();
      }
    });
  }

  ngOnInit() {
    console.log('Loading for', this.origin);
    this.message = {
      text: '',
    };

  }

  chatAreaKeyPress(event) {
    if (event.key === "Enter") {
      this.message.sender = this.origin.charAt(0).toUpperCase() + this.origin.slice(1);
      this.socket.sendMessage(this.message);
      this.message.text = '';
    }

  }


}
