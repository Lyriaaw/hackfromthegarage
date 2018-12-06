import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StationDashboardComponent} from './desktop/station/dashboard.component';
import {ControlDashboardComponent} from './desktop/control/dashboard.component';
import {MobileComponent} from './mobile/mobile.components';

const routes: Routes = [
  {path: 'station/dashboard', component: StationDashboardComponent},
  {path: 'station/mobile', component: MobileComponent},
  {path: 'ground/dashboard', component: ControlDashboardComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
