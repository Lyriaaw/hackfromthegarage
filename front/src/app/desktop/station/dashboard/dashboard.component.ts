import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Medical} from '../../../models/medical';
import { Chart } from 'chart.js';
import {Message} from '../../../models/message';
import {WebsocketService} from '../../../services/websocket.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-station-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class StationDashboardComponent implements OnInit {
  title = 'Dashboard Station Control';

  healthChart = [];
  weatherChart = [];
  datas: Medical[] = [];

  message: Message;

  messages: Message[] = [];

  origin: string;

  constructor(private apiService: ApiService, private socket: WebsocketService, private route: ActivatedRoute,) {
    this.datas = [
      {id: 1, uid: 'fezfz', weight: 70.2, timestamp: 1, pulse: 87, glucose: 0.05},
      {id: 1, uid: 'fezfz', weight: 70.1, timestamp: 2, pulse: 83, glucose: 0.01},
      {id: 1, uid: 'fezfz', weight: 70.3, timestamp: 3, pulse: 120, glucose: 0.03}
    ];




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

  ngOnInit() {

    console.log(this.datas.map(data => data.weight));

    this.healthChart = new Chart('canvas1', {
      type: 'line',
      maintainAspectRatio: true,
      responsive: true,
      data: {
        labels: this.datas.map(data => data.timestamp),
        datasets: [
          {
            data: this.datas.map(data => data.weight),
            borderColor: '#3cba9f',
            fill: false
          },
          {
            data: this.datas.map(data => data.pulse),
            borderColor: '#ffcc00',
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    });


    this.weatherChart = new Chart('canvas2', {
      type: 'line',
      data: {
        labels: this.datas.map(data => data.timestamp),
        datasets: [
          {
            data: this.datas.map(data => data.weight),
            borderColor: '#3cba9f',
            fill: false
          },
          {
            data: this.datas.map(data => data.pulse),
            borderColor: '#ffcc00',
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    });



    this.origin = this.route.snapshot.paramMap.get('team');

    console.log('Origin', this.origin);
    
    this.message = {
      text: '',
      sender: this.origin,
    };



  }


  loadComponents() {

  }

}
