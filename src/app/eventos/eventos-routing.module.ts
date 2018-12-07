import { NgModule } from '@angular/core';

import { RouterModule, Routes, Router } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { ScheduleComponent } from './schedule/schedule.component';

const eventosRoutes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: '', redirectTo: 'info', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild( eventosRoutes )
  ],
  exports: [
    RouterModule
  ]
})
export class EventosRoutingModule { }
