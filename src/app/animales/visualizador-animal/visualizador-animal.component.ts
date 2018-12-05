import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-visualizador-animal',
  templateUrl: './visualizador-animal.component.html',
  styleUrls: ['./visualizador-animal.component.css']
})
export class VisualizadorAnimalComponent implements OnInit {

  @Input('animal') animal: Animal;

  @Output('idClicked') idEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onIdClicked(): void {
    this.idEmitter.emit(this.animal.id);
  }

}
