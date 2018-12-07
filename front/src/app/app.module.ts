import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {MobileComponent} from './mobile/mobile.components';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {StationDashboardComponent} from './desktop/station/dashboard/dashboard.component';
import {ApiService} from './services/api.service';
import {HttpClientModule} from '@angular/common/http';
import {MedicalService} from './services/medial.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

import {MobileModule} from './mobile/mobile.module';

import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { ToDoListComponent } from './mobile/to-do-list/to-do-list.component';
import { MapsComponent } from './mobile/maps/maps.component';
import {WebsocketService} from './services/websocket.service';
import {ChatComponent} from './modules/chat/chat.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ProgressBarModule} from "angular-progress-bar"


@NgModule({
  declarations: [
    AppComponent,
    StationDashboardComponent,
    MobileComponent,
    ToDoListComponent,
    MapsComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    HttpClientModule,
    MobileModule,
    ProgressBarModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBu2MzhJLvkrA-BZgmynKvU-Qg5wOAmGM0'
    }),
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  providers: [
    ApiService,
    MedicalService,
    WebsocketService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
