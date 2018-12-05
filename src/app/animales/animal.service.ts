import { Injectable } from '@angular/core';
import { PersonaService } from '../personas/persona.service';
import { Animal } from './animal';
import { Persona } from '../personas/persona';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animales: Animal[];
  private animalesIndex = 0;

  public animalSeleccionado: Animal;

  constructor(
    private personasService: PersonaService
  ) { this.initAnimales(); }
  
  private initAnimales(): void {
    this.animales = [
      new Animal(1, "Jorge el travieso", this.personasService.getAllPersonas()[0]),
      new Animal(2, "George la tortuga", this.personasService.getAllPersonas()[1]),
      new Animal(3, "Miriam la jirafa", this.personasService.getAllPersonas()[2]),
      new Animal(4, "El escorpión plateado", this.personasService.getAllPersonas()[3]),
    ];
    this.setAnimal();
  }

  private setAnimal(): void {
    this.animalSeleccionado = this.animales[this.animalesIndex];
  }

  public siguienteAnimal(): void {
    if (this.animalesIndex == this.animales.length - 1) {
      this.animalesIndex = 0;
    } else {
      this.animalesIndex++;
    }
    this.setAnimal();
  }

  public previoAnimal(): void {
    if(this.animalesIndex == 0) {
      this.animalesIndex = this.animales.length - 1;
    } else {
      this.animalesIndex--;
    }
    this.setAnimal();
  }

  public getSelectedAnimal(): Animal {
    return this.animalSeleccionado;
  }

  public getAllCuidadores(): Persona[] {
    return this.personasService.getAllPersonas();
  }
}
