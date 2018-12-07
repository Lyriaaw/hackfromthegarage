import { Component } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Medical} from '../../../models/medical';
import { Chart } from 'chart.js';
import {Message} from '../../../models/message';
import {WebsocketService} from '../../../services/websocket.service';


@Component({
  selector: 'app-station-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionComponent {
  title = 'Mission';




  constructor(private apiService: ApiService, private socket: WebsocketService) {

    this.socket.initSocket();
    this.socket.onAny().subscribe((message: any) => {
      console.log('Message', message)
    });
  }




}
