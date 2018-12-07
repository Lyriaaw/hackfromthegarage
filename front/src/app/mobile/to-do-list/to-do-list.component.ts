import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Medical} from '../../models/medical';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  switchMaps: boolean;
  isOpenModal: boolean;
  isClickButton: boolean;
  value: number;
  pulse: number;
  dataPulse: void[];
  glycemia: number;
  weight: number;
  today: string;
  temperature: number;

  constructor(private api: ApiService)  {
    this.isClickButton = false;
    this.value = 50;
    this.isOpenModal = false;
    this.switchMaps = false;
    this.glycemia = 90;
    this.weight = 70;
    this.pulse= 80;
    this.today = "Lundi"
    this.temperature = 70;
  }

  ngOnInit(): void {
    this.api.get<Medical[]>('/medical/getall').subscribe((data: Medical[]) => {
      this.dataPulse = data.map(m => {});
      let t =this;
      setInterval(
        () => t.setPulse(),1000
      )
    });
  }

  private setPulse(): any {
    this.pulse = ((((Math.random()*100) - 0) * (100 - 70))/ (100 - 0) + 70);
    this.glycemia = ((((Math.random()*100) - 0) * (100 - 85))/ (100 - 0) + 85);
  }
  private openMaps(): void {
    this.switchMaps = true;
  }

  private openModalAlert(): void {
    console.log("ouvert");
    this.isOpenModal = true;
  }

  private onClickClose(): void {
    console.log("close");
    this.isOpenModal = false;
    this.isClickButton = false;
  }

  private onClickInformation() {
    console.log("info");
    this.isClickButton = true;
  }
  private onClickAlert() {
    console.log("alert");
  
    this.isClickButton = true;
  }
  private onClickDanger() {
    console.log("danger");
    
    this.isClickButton = true;
  }
}
