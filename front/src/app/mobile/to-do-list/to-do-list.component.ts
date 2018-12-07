import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent  {

  switchMaps: boolean;
  isOpenModal: boolean;

  constructor() {
    this.isOpenModal = false;
    this.switchMaps = false;
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
