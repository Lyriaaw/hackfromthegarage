import {Component, Input} from '@angular/core';
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
export class ChatComponent {
  title = 'Chat';


  message: Message;

  messages: Message[] = [];

  @Input() origin: string;

  constructor(private apiService: ApiService, private socket: WebsocketService, private route: ActivatedRoute,) {

    this.message = {
      text: '',
      sender: this.origin,
    };


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

  chatAreaKeyPress(event) {
    if (event.key === "Enter") {
      this.socket.sendMessage(this.message);
      this.message = {
        text: '',
        sender: this.origin,
      }
    }

  }


}
