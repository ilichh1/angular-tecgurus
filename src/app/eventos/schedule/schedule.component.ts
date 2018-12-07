import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  public eventos = [
    {
      id: 0,
      name: 'Pingüinos bailando por el mundo',
      time: 'Hoy a las 8'
    },
    {
      id: 2,
      name: 'Leones cantando',
      time: 'Hoy a ñas 16:30'
    },
    {
      id: 3,
      name: 'Hipopotamos planeando',
      time: 'Mañana a las 17:15'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
