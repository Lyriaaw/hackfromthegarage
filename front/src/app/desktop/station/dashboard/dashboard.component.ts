import { Component } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Medical} from '../../../models/medical';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-station-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class StationDashboardComponent {
  title = 'Dashboard Station Control';

  healthChart = [];
  weatherChart = [];
  datas: Medical[] = [];

  constructor(private apiService: ApiService) {
    this.datas = [
      {id: 1, uid: 'fezfz', weight: 70.2, timestamp: 1, pulse: 87, glucose: 0.05},
      {id: 1, uid: 'fezfz', weight: 70.1, timestamp: 2, pulse: 83, glucose: 0.01},
      {id: 1, uid: 'fezfz', weight: 70.3, timestamp: 3, pulse: 120, glucose: 0.03}
    ];
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





  }

  loadComponents() {

  }

}
