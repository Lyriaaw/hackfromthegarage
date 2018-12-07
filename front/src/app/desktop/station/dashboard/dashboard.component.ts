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

  loaded: boolean = false;

  constructor(private api: ApiService, private socket: WebsocketService, private route: ActivatedRoute,) {

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

    setTimeout(() => {
      this.origin = this.route.snapshot.paramMap.get('team');
    });


    this.api.get<Medical[]>('/medical/getall').subscribe((data: Medical[]) => {
      console.log(data.map(m => m.mass));
    });





  }


  loadComponents() {

    this.healthChart = new Chart('canvas1', {
      type: 'line',
      maintainAspectRatio: true,
      responsive: true,
      data: {
        labels: this.datas.map(data => data.timestamp),
        datasets: [
          {
            data: this.datas.map(data => data.mass),
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
            data: this.datas.map(data => data.mass),
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
  }

}
