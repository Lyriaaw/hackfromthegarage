import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent   {

  title: string = 'My first AGM project';
  latitude: number = -24.533255;
  longitude: number = 15.162674;

  isOpenModal: boolean;
  switchToDoList: boolean;
  switchMaps: boolean;
  

  constructor(public dialog: MatDialog) {
    this.switchMaps = true;
    this.switchToDoList = false;
    this.isOpenModal = false;
  }

  private openModalAlert(): void {
    console.log("ouvert");
    this.isOpenModal = true;
  }

  private openToDoList(): void {
    this.switchToDoList = true;
    this.switchMaps = false;
  }

  private onClickClose(): void {
    console.log("close");
    this.isOpenModal = false;
  }

}
