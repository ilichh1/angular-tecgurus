import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-visualizador-animal',
  templateUrl: './visualizador-animal.component.html',
  styleUrls: ['./visualizador-animal.component.css']
})
export class VisualizadorAnimalComponent implements OnInit {

  @Input('animal') animal: Animal;

  constructor() { }

  ngOnInit() {
  }

}
