import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MobileComponent} from './mobile/mobile.components';
import {StationDashboardComponent} from './desktop/station/dashboard/dashboard.component';
import { ToDoListComponent } from './mobile/to-do-list/to-do-list.component';
import { MapsComponent } from './mobile/maps/maps.component';
import {MissionComponent} from './desktop/station/missions/missions.component';
import {ChatComponent} from './modules/chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: 'station/dashboard', pathMatch: 'full' },
    {path: ':team/dashboard', component: StationDashboardComponent},
    {path: ':team/missions', component: MissionComponent},
  { path: 'station/mobile',
    children: [
      { path: '', component: MobileComponent},
      { path: 'maps', component: MapsComponent },
      { path: 'todolist', component: ToDoListComponent },
      { path: 'chat-mobil', component: ChatComponent },
    ]
  },
  { path: '', redirectTo: 'station/dashboard', pathMatch: 'full' },
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
