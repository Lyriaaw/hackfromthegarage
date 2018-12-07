import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgmCoreModule} from '@agm/core';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDqFswzBG-HXvnkWKKYz7qZ71ADv_dovQ'
    }),
  ],
  declarations: []
})
export class MapsModule { }
