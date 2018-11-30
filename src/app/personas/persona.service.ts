import { Injectable } from '@angular/core';
import { Persona } from './editor-personas/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private personas: Persona[];
  private personasIndex = 0;
  private personaSeleccionada: Persona;

  constructor() { 
    this.inicializarPersonas();
  }

  private setPersona(): void {
    this.personaSeleccionada = this.personas[this.personasIndex];
  }

  public siguientePersona(): void {
    if (this.personasIndex == this.personas.length - 1) {
      this.personasIndex = 0;
    } else {
      this.personasIndex++;
    }
    this.setPersona();
  }

  public previaPersona(): void {
    if(this.personasIndex == 0) {
      this.personasIndex = this.personas.length - 1;
    } else {
      this.personasIndex--;
    }
    this.setPersona();
  }

  private inicializarPersonas(): void {
    this.personas = [
      new Persona(0, 'Ilich', 'Arredondo'),
      new Persona(1, 'Paco', 'El Chato'),
      new Persona(2, 'Sebastian', 'Algo'),
      new Persona(3, 'Eleco', 'Loco'),
      new Persona(4, 'Leonardo', 'DiDavinchi'),
      new Persona(5, 'La', 'Brittany')
    ];
    this.setPersona();
  }

  public getPersonaSeleccionada(): Persona {
    return this.personaSeleccionada;
  }

  public getAllPersonas(): Persona[] {
    return this.personas;
  }

  public alertarPersonaSeleccionada(): void {
    window.alert(this.personaSeleccionada.toString());
  }
}
