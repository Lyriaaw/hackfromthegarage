import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {MobileComponent} from './mobile/mobile.components';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';
import {StationDashboardComponent} from './desktop/station/dashboard/dashboard.component';
import {ControlDashboardComponent} from './desktop/control/dashboard.component';
import {ApiService} from './services/api.service';
import {HttpClientModule} from '@angular/common/http';
import {MedicalService} from './services/medial.service';


@NgModule({
  declarations: [
    AppComponent,
    StationDashboardComponent,
    ControlDashboardComponent,
    MobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatCardModule,
  ],
  providers: [
    ApiService,
    MedicalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
