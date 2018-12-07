import { Component } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Message} from '../../../models/message';
import {WebsocketService} from '../../../services/websocket.service';


@Component({
  selector: 'app-station-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionComponent {
  title = 'Mission';

  latitude: number = -24.533255;
  longitude: number = 15.162674;

  constructor(private apiService: ApiService, private socket: WebsocketService) {

    this.socket.initSocket();
    this.socket.onAny().subscribe((message: any) => {
      console.log('Message', message)
    });
  }




}
