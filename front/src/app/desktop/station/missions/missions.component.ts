import { Component } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Medical} from '../../../models/medical';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-station-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionComponent {
  title = 'Mission';

  healthChart = [];
  weatherChart = [];
  datas: Medical[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {

  }


}
