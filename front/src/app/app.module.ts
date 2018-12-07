import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {StationDashboardComponent} from './desktop/station/dashboard.component';
import {ControlDashboardComponent} from './desktop/control/dashboard.component';
import {MobileComponent} from './mobile/mobile.components';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

import {MobileModule} from './mobile/mobile.module';

import {AgmCoreModule} from '@agm/core';
import { FormsModule } from '@angular/forms';
import { ToDoListComponent } from './mobile/to-do-list/to-do-list.component';
import { MapsComponent } from './mobile/maps/maps.component';


@NgModule({
  declarations: [
    AppComponent,
    StationDashboardComponent,
    ControlDashboardComponent,
    MobileComponent,
    ToDoListComponent,
    MapsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MobileModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBu2MzhJLvkrA-BZgmynKvU-Qg5wOAmGM0'
    }),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
