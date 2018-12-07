import { Component } from '@angular/core';
import { Time } from '@angular/common';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent  {

  switchMaps: boolean;
  isOpenModal: boolean;
  value: number;
  pulse: number;
  glycemia: number;
  weight: number;
  today: string;
  temperature: number;

  constructor() {
    this.value = 50;
    this.isOpenModal = false;
    this.switchMaps = false;
    this.glycemia = 20;
    this.weight = 70;
    this.pulse= 20;
    this.today = "Lundi"
    this.temperature = 70;
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
  }
}
