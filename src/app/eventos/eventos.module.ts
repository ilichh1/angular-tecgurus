import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { InfoComponent } from './info/info.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

// Routing module
import { EventosRoutingModule } from './eventos-routing.module';

@NgModule({
  declarations: [InfoComponent, ScheduleComponent, EventDetailComponent],
  imports: [
    CommonModule,
    EventosRoutingModule
  ]
})
export class EventosModule { }
