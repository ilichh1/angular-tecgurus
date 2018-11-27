import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  private data: string = 'Valor inicial';

  private dataArray: string[] = [
    'Hola',
    'Mundo',
    'Ya',
    'Sé',
    'Programar'
  ]

  constructor() { }

  ngOnInit() {
  }

}
