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
import {WebsocketService} from './services/websocket.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    StationDashboardComponent,
    MobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
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
