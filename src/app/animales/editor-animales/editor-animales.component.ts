import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';
import { Persona } from '../../personas/persona';

@Component({
  selector: 'app-editor-animales',
  templateUrl: './editor-animales.component.html',
  styleUrls: ['./editor-animales.component.css']
})
export class EditorAnimalesComponent implements OnInit {

  private animal: Animal;
  private fontSize = 16;

  constructor(
    private animalService: AnimalService
  ) { }

  ngOnInit() {
    this.actualizarAnimalSeleccionado();
  }

  private actualizarAnimalSeleccionado(): void {
    this.animal = this.animalService.getSelectedAnimal();
  }

  onPrevAnimal(): void {
    this.animalService.previoAnimal();
    this.actualizarAnimalSeleccionado();
  }

  onNextAnimal(): void {
    this.animalService.siguienteAnimal();
    this.actualizarAnimalSeleccionado();
  }

  onIdClicked(evt: number): void {
    console.log("USUARIO DIO CLICK AL ID: " + evt);
  }

  private getAllCuidadores(): Persona[] {
    return this.animalService.getAllCuidadores();
  }
}