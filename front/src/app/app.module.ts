import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {StationDashboardComponent} from './desktop/station/dashboard.component';
import {ControlDashboardComponent} from './desktop/control/dashboard.component';
import {MobileComponent} from './mobile/mobile.components';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';


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

    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
