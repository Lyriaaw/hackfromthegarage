import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MobileComponent} from './mobile/mobile.components';
import {StationDashboardComponent} from './desktop/station/dashboard/dashboard.component';
import {ControlDashboardComponent} from './desktop/control/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'station/dashboard', pathMatch: 'full' },
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
